const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EAC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EAC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xfB77Fef2C8091b43eB7a8B9Fa79fF924F4bA599E","0x3635c9adc5dea00000");
		});
	});
});