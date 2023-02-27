const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EURN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EURN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("stake",function(){
		it("testing stake",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).stake("0x055f4ff372dec000");
		});
	});
});