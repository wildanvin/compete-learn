// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SBTCertification is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address public immutable teacher;
    mapping (address => string) public studentMetadata;
    mapping (address => bool) public studentApproved;


    error NotTransferable();
    error NotTeacher();
    error NotApproved();

    modifier onlyTeacher() {
		if (msg.sender != teacher) revert NotTeacher();
        _;
	}
    
    modifier onlyApproved() {
		if (!studentApproved[msg.sender]) revert NotApproved();
        _;
	}

    constructor(address _teacher) ERC721("SBTCert", "CRT") {
        teacher = _teacher;
    }

    function claimCertification(address player, string memory tokenURI)
        public
        onlyApproved
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }

    //This function takes an array of addresses and string URIS is only settable by the teacher
    function approveStudents(address[] calldata students, string[] calldata metadata) public onlyTeacher {
        //set:
        /*
        studentMetadata;
        studentApproved;
         */


    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                         OVERRIDES                          */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    function _transfer(address, address, uint256) internal pure override {
        revert NotTransferable();
    }

    function _approve(address, uint256) internal pure override {
        revert NotTransferable();
    }

    // function _beforeTokenTransfer( address, address, uint256, uint256) internal pure override {
    //     revert NotTransferable();
    // }
}