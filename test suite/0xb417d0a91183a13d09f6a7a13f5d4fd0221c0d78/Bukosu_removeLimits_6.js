const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Bukosu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Bukosu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("removeLimits",function(){
		it("testing removeLimits",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).removeLimits();
		});
	});
});