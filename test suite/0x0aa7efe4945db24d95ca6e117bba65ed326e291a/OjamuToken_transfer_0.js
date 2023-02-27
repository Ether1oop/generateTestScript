const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OjamuToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OjamuToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x23b9Fa179AFB08732Be5DC68fB506fd3b501D803","0x84618ecdbabfe80000");
		});
	});
});