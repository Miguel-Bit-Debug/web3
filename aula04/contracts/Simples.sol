pragma solidity ^0.8.7;

contract Simples {
    string public name;

    function mudaNome(string memory _name) public {
        name = _name;
    }
}