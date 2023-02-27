const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BuyEtherCatsFoundersSeries",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BuyEtherCatsFoundersSeries");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xfF5330fe203B27EFbED106bF6a0901B972b4AC3F",0);
		});
	});
});