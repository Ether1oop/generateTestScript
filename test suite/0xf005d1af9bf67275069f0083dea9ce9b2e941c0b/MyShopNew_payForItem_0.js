const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MyShopNew",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MyShopNew");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("payForItem",function(){
		it("testing payForItem",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).payForItem();
		});
	});
});