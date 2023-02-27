const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AFI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AFI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xC8c1B41713761281a520b7ad81544197bc85a4Ce","0x72cb5bd86321e38cb6ce6682e80000000000");
		});
	});
});