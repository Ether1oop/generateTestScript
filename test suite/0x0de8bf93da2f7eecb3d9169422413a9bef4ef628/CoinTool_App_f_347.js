const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x0cf5","0x0cf6","0x0cf7","0x0cf8","0x0cf9","0x0cfa","0x0cfb","0x0cfc","0x0cfd","0x0cfe","0x0cff","0x0d00","0x0d01","0x0d02","0x0d03","0x0d04","0x0d05","0x0d06","0x0d07","0x0d08","0x0d09","0x0d0a","0x0d0b","0x0d0c","0x0d0d","0x0d0e","0x0d0f","0x0d10","0x0d11","0x0d12","0x0d13","0x0d14","0x0d15","0x0d16","0x0d17","0x0d18","0x0d19","0x0d1a","0x0d1b","0x0d1c","0x0d1d","0x0d1e","0x0d1f","0x0d20","0x0d21","0x0d22","0x0d23","0x0d24","0x0d25","0x0d26","0x0d27","0x0d28","0x0d29","0x0d2a","0x0d2b","0x0d2c","0x0d2d","0x0d2e","0x0d2f","0x0d30","0x0d31","0x0d32","0x0d33","0x0d34","0x0d35","0x0d36","0x0d37","0x0d38","0x0d39","0x0d3a","0x0d3b","0x0d3c","0x0d3d","0x0d3e","0x0d3f","0x0d40","0x0d41","0x0d42","0x0d43","0x0d44","0x0d45","0x0d46","0x0d47","0x0d48","0x0d49","0x0d4a","0x0d4b","0x0d4c","0x0d4d","0x0d4e","0x0d4f","0x0d50","0x0d51","0x0d52","0x0d53","0x0d54","0x0d55","0x0d56","0x0d57","0x0d58","0x0d59","0x0d5a","0x0d5b","0x0d5c","0x0d5d","0x0d5e","0x0d5f","0x0d60","0x0d61","0x0d62","0x0d63","0x0d64","0x0d65","0x0d66","0x0d67","0x0d68","0x0d69","0x0d6a","0x0d6b","0x0d6c","0x0d6d","0x0d6e","0x0d6f","0x0d70","0x0d71","0x0d72","0x0d73","0x0d74"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001500000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});