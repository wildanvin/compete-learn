// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract SBTCertificationCore is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    error NotTransferable();

    constructor() ERC721("SBTCert", "CRT") {}

    function awardItem(address player, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(player, newItemId);
        _setTokenURI(newItemId, tokenURI);

        _tokenIds.increment();
        return newItemId;
    }

    // function _transfer(address, address, uint256) internal pure override {
    //     revert NotTransferable();
    // }

    // function _approve(address, uint256) internal pure override {
    //     revert NotTransferable();
    // }

    // function _beforeTokenTransfer( address, address, uint256, uint256) internal pure override {
    //     revert NotTransferable();
    // }
}