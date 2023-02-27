const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Storage",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Storage");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("store",function(){
		it("testing store",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).store("0x0de0b6b3a7640000");
		});
	});
});