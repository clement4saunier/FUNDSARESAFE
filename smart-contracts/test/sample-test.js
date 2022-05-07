const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Funding", function() {
  let funding;
  let token = [];

  beforeEach(async function() {
    const fundingContract = await ethers.getContractFactory("Funding");
    const tokenContract = await ethers.getContractFactory("Token");

    funding = await fundingContract.deploy();
    for (let i = 0; i < 5; i++) {
      token[i] = await tokenContract.deploy();
      await token[i].deployed();
    }
    await funding.deployed();
  });

  it("Should create funding", async function() {
    const [owner] = await ethers.getSigners();
    const goal = 100;
    const metadata = "link";
    const tkn = token[0];

    await funding.createFunding(tkn.address, goal, metadata);

    expect((await funding.project(0)).token).to.equal(tkn.address);
    expect((await funding.project(0)).goal).to.equal(goal);
    expect((await funding.project(0)).ongoing).to.equal(true);
    expect(await funding.builder(0)).to.equal(owner.address);
  });

  it("Should fund with tokens", async function() {
    const [owner, giver] = await ethers.getSigners();
    const goal = 100;
    const metadata = "link";
    const tkn = token[0];
    const donation = 10;

    await funding.createFunding(tkn.address, goal, metadata);
    await tkn.transfer(giver.address, donation);

    await tkn.connect(giver).approve(funding.address, donation);
    await funding.connect(giver).fund(0, donation);

    expect(await tkn.balanceOf(giver.address)).to.equal(0);
    expect(await tkn.balanceOf(funding.address)).to.equal(donation);
  });

  it("Should withdraw if completed", async function() {
    const [owner, giver] = await ethers.getSigners();
    const goal = 100;
    const metadata = "link";
    const tkn = token[0];
    const donation = goal + 50;

    await funding.createFunding(tkn.address, goal, metadata);
    await tkn.transfer(giver.address, donation);

    await tkn.connect(giver).approve(funding.address, donation);
    await funding.connect(giver).fund(0, donation / 2);
    expect(funding.withdrawFunds(0)).to.be.revertedWith("Funding not complete");
    await funding.connect(giver).fund(0, donation / 2);

    expect((await funding.project(0)).fund).to.equal(donation);
    await funding.withdrawFunds(0);
    expect(await tkn.balanceOf(funding.address)).to.equal(0);
  });
});
