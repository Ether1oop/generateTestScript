const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FreeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FreeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB8541D796DbC29d923Bd64c6eae5c1E6ad606395","0x05d0ecd38610e6d408000000");
		});
	});
});