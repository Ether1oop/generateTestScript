const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MVLToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MVLToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x764E09aB58f15024724631F0727cba37f70C084E","0x69e10de76676d0800000");
		});
	});
});