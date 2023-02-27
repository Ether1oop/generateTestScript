const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MetaRare",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MetaRare");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF3bb4B8E814764626161803BE51FB471fD3a4B12","0x01818990080aaf164000");
		});
	});
});