const Padrao = artifacts.require('Padrao')

module.exports = function (deployed) {
    deployed.deploy(Padrao);
}