const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ACH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ACH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2F561654bbAB216c6C96341Bcd714bb27D5d9101","0x04516c68cee4");
		});
	});
});