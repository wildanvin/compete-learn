// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SBTCertification is ERC721URIStorage {
    using Counters for Counters.Counter;


    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          VARIABLES                         */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    
    Counters.Counter private _tokenIds;

    address public immutable teacher;
    mapping (address => string) public studentMetadata;
    mapping (address => bool) public studentApproved;

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                           ERRORS                           */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    error NotTransferable();
    error NotTeacher();
    error NotApproved();

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                         MODIFIERS                          */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    modifier onlyTeacher() {
		if (msg.sender != teacher) revert NotTeacher();
        _;
	}
    
    modifier onlyApproved() {
		if (!studentApproved[msg.sender]) revert NotApproved();
        _;
	}

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                        FUNCTIONALITY                       */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    constructor(address _teacher) ERC721("SBTCert", "CRT") {
        teacher = _teacher;
    }

    function claimCertification()
        public
        onlyApproved
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, studentMetadata[msg.sender]);

        _tokenIds.increment();
        return newItemId;
    }

    function approveStudents(address[] calldata students, string[] calldata metadata) 
        public
        onlyTeacher 
    {
        for (uint i = 0; i < students.length; i++) {
           studentApproved[students[i]] = true; 
           studentMetadata[students[i]] = metadata[i];
        }
    }

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                         OVERRIDES                          */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/
    function _beforeTokenTransfer(address from, address, uint256, uint256) internal pure override {
        if (from!= address(0)){
        revert NotTransferable();
        }
    }
}