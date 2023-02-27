const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("cVToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("cVToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2b644D58B1F102215489062Ed8812F64c373028c","0x33ab4439a09830800000");
		});
	});
});