const HelloWorld = artifacts.require('HelloWorld');
const Simples = artifacts.require('Simples')

module.exports = function (deployer) {
    deployer.deploy(HelloWorld);
    deployer.deploy(Simples);
}
