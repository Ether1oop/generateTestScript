const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DSToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DSToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Token2","TKN2","18");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xeEF417e1D5CC832e619ae18D2F140De2999dD4fB","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});