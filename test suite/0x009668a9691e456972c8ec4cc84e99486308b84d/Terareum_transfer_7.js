const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Terareum",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Terareum");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0000000048429Ba5463A4a9Aa866460087dcebd0","0x0e474b3ab81c8787648c8c0000");
		});
	});
});