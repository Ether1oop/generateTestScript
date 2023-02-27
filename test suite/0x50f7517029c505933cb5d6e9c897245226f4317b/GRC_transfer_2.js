const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GRC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GRC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x12223f86cC1EeB7BCEDa60d06BEc3Bc31733033A","0x69e10de76676d0800000");
		});
	});
});