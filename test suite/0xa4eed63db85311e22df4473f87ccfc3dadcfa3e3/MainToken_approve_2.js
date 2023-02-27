const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MainToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MainToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x333762311D3918d8B9CB23ec1b02aBD176353333","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});