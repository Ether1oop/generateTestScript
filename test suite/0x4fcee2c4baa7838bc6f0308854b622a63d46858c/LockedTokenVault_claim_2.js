const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LockedTokenVault",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LockedTokenVault");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x4691937a7508860F876c9c0a2a617E7d9E945D4B");
		return {_contract,account0,account1,account2};
	}

	describe("claim",function(){
		it("testing claim",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).claim();
		});
	});
});