const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ZELWIN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ZELWIN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB3a9AD594Fe3B50aa077514460BCf273b2e7d613","0x015b8f6580b22b028000");
		});
	});
});