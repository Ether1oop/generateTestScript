const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dragon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dragon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9e87E1FF1d6A56a68A54AA39f8240E2e65768C02","0x41a60043d8d60c0000");
		});
	});
});