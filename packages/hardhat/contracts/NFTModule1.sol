// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTModule1 is ERC721 {
    using Counters for Counters.Counter;

    /*´:°•.°+.*•´.*:˚.°*.˚•´.°:°•.°•.*•´.*:˚.°*.˚•´.°:°•.°+.*•´.*:*/
    /*                          VARIABLES                         */
    /*.•°:°.´+˚.*°.˚:*.´•*.+°.•°:´*.´•*.•°.•°:°.´:•˚°.*°.˚:*.´+°.•*/

    Counters.Counter private _tokenIdCounter;
    address public immutable teacher;
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

    constructor(address _teacher) ERC721("Mod1Cert", "MOD1") {
        teacher = _teacher;
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://bafybeihtjc5dubvxtwxfubw6yubhi2nxbfxudqmfzts2d76rgfn2ei6jg4/";
    }

    function claimCertNFT() public onlyApproved {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);
    }

    function approveStudents(address[] calldata students) 
        public
        onlyTeacher 
    {
        for (uint i = 0; i < students.length; i++) {
           studentApproved[students[i]] = true; 
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

    function _approve(address, uint256) internal pure override {
        revert NotTransferable();
    }
}