//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {
    constructor() ERC20("TKN", "TKN") {
        _mint(msg.sender, 100000);
    }

    function decimals() public view virtual override returns (uint8) {
        return 0;
    }
}
