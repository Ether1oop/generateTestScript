const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UtrustToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UtrustToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x455c616C661Fd20D881Bf0C57AFAa0649Ae1FA0D","0x0fa735c4fa2be1f10000");
		});
	});
});