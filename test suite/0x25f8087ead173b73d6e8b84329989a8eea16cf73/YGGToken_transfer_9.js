const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YGGToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YGGToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8B8D8093f39E7427cc175e61dDee7b9B766d8922","0x076d41c62494840000");
		});
	});
});