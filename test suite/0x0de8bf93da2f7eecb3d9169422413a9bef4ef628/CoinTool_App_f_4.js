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
			await _contract.connect(account0).f(["0x01","0x02","0x03","0x04","0x05","0x06","0x07","0x08","0x09","0x0a","0x0b","0x0c","0x0d","0x0e","0x0f","0x10","0x11","0x12","0x13","0x14","0x15","0x16","0x17","0x18","0x19","0x1a","0x1b","0x1c","0x1d","0x1e"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000004700000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});