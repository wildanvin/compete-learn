// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract LearnToken is ERC20, ERC20Burnable {

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          VARIABLES                         */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    address public immutable teacher;
    uint256 public supplyAtFinnish;
    bool finnished;

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                           ERRORS                           */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    error NotTeacher();
    error AlreadyCalled();
    error SupplyIsZero();


    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                         MODIFIERS                          */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    modifier onlyTeacher() {
		if (msg.sender != teacher) revert NotTeacher();
        _;
	}
    
    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                        FUNCTIONALITY                       */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    constructor(address _teacher) ERC20("LearnToken", "LEARN") {
        teacher = _teacher;
    }

    function mint(address[] memory to, uint256[] memory amount) external onlyTeacher {
        for (uint i = 0; i < to.length; i++) {
           _mint(to[i], amount[i]);
        }
    }

    function finnishClass () external onlyTeacher {
        if (!finnished){
            supplyAtFinnish = totalSupply();
            finnished = true;
        } else {
            revert AlreadyCalled();
        }
    }

    //Review later with more time 🤔
    function claimPriceInETH (uint256 tokens) external {
        if (supplyAtFinnish == 0) revert SupplyIsZero();
        burn(tokens);
        uint256 reward = (tokens * address(this).balance)/supplyAtFinnish;
        (bool sent,) = msg.sender.call{value: reward}("");
        require(sent, "Failed to send Ether");
    }

    //TODO:
        //function claimPriceInUSDC
}