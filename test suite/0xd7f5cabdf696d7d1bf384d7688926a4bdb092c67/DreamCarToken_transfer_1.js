const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DreamCarToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DreamCarToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Dream Car","DRC","18","1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7833074e2970a297D7d70672F7D801D19601217C","0x0697eb6528771228fbf400");
		});
	});
});