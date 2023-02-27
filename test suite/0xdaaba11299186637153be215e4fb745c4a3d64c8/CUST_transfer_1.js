const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CUST",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CUST");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xe91d4A3F5E2ce52099d8360B484a1a5a975947F2","0xc0392ea920c4db595000");
		});
	});
});