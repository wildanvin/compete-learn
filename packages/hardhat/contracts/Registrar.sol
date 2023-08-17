//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Registrar {

    address public immutable teacher;

    constructor (address _teacher) {
        teacher = _teacher;
    }
}