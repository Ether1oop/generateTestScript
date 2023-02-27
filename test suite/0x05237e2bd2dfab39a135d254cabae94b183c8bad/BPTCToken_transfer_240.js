const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BPTCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BPTCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x10f7dF6b7B6EA78d96e38EEa6Ad51De8585e54E2","0x05237e3e3400");
		});
	});
});