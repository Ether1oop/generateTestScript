const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PD",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PD");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("renounceOwnership",function(){
		it("testing renounceOwnership",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).renounceOwnership();
		});
	});
});