const Migrations = artifacts.require("Shit");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
