const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Lambda",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Lambda");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x89CE0212d40244444Ae7691f77E1076b1c5A371c","0x10c159057a6e9b820000");
		});
	});
});