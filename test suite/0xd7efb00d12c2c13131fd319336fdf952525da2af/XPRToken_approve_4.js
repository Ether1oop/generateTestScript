const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XPRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XPRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xE9B3C5286E3472fDbA58d97e0307AbCCE5468c9b","0x033b2e3c9fd0803ce8000000");
		});
	});
});