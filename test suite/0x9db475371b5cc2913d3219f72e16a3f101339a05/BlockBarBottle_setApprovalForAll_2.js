const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BlockBarBottle",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BlockBarBottle");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xA6Ac31Aa7a23d1FFFA6fAE4DD065332942621ee4",1);
		});
	});
});