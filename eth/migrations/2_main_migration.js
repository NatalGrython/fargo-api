var MyContract = artifacts.require("Main");

module.exports = function(deployer){
    deployer.deploy(MyContract);
};