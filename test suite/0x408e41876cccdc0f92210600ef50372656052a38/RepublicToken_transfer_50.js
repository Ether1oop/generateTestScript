const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RepublicToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RepublicToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x94BcA3f266cd123fCEe868490eD0Bc9e9341049d","0x26403e335ec0bd8c0000");
		});
	});
});