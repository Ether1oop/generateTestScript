const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NuCypherToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NuCypherToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("3885390081748248632541961138");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xD0FF1f431F55CD48f0ff469c579A1CcEb45C7f1A","0x043b2e614a1e9dc81a52");
		});
	});
});