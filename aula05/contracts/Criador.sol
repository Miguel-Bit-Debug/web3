pragma solidity ^0.8.7;

import "./Padrao.sol";

contract Criador {
    address public endereco;

    function CriaPadrao() public {
        Padrao novoPadrao = new Padrao();

        endereco = address(novoPadrao);
    }
}