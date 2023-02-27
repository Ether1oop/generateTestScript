const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MWT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MWT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x82613a289B48f3012339E3f2ADaaA57568F1bF70","0x15245655b102580000");
		});
	});
});