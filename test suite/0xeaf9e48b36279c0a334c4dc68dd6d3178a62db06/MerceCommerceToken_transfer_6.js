const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MerceCommerceToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MerceCommerceToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("4000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x739c5E6DDdC25F1E69022087cC2425dE3C78e7a6","0x152d02c7e14af6800000");
		});
	});
});