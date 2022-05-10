//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Funding {
    using Counters for Counters.Counter;
    Counters.Counter private _id;
    address private _owner;

    struct Project {
        string metadata;
        bool ongoing;
        IERC20 token;
        uint256 goal;
        uint256 fund;
    }

    // Mapping from projectId to project
    mapping(uint256 => Project) public project;
    // Mapping from projectId to builder
    mapping(uint256 => address) public builder;
    // Mapping from projectId to founder to funds
    mapping(uint256 => mapping(address => uint256)) founder;

    constructor() {
        _owner = msg.sender;
    }

    function createFunding(
        IERC20 token,
        uint256 goal,
        string memory metadata
    ) public {
        project[_id.current()] = Project(metadata, true, token, goal, 0);
        builder[_id.current()] = msg.sender;
        _id.increment();
    }

    function projectSupply() public view returns (uint256) {
        return (_id.current());
    }

    function fund(uint256 projectId, uint256 amount) public {
        require(
            project[projectId].token.allowance(msg.sender, address(this)) >=
                amount,
            "Fund: Not enough allowance"
        );
        require(
            project[projectId].token.transferFrom(
                msg.sender,
                address(this),
                amount
            ),
            "Fund: Transfer failed"
        );

        founder[projectId][msg.sender] += amount;
        project[projectId].fund += amount;
    }

    function withdrawFunds(uint256 projectId) public {
        require(msg.sender == builder[projectId], "Restricted to builder");
        require(
            project[projectId].fund >= project[projectId].goal,
            "Funding not complete"
        );
        require(project[projectId].ongoing, "Funds already withdrawn");
        require(
            project[projectId].token.transfer(builder[projectId], project[projectId].fund),
            "Transfer failed"
        );

        project[projectId].ongoing = false;
    }

    function withdrawDonation(uint256 projectId) public {
        require(founder[projectId][msg.sender] != 0, "No donations for project");
        require(
            project[projectId].goal >= project[projectId].fund,
            "Funding complete"
        );
        require(!project[projectId].ongoing, "Funding not complete");
        require(
            project[projectId].token.transfer(msg.sender, founder[projectId][msg.sender]),
            "Transfer failed"
        );
    }
}
