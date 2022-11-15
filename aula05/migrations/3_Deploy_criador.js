const Criador = artifacts.require('Criador')

module.exports = function (deployed) {
    deployed.deploy(Criador);
}