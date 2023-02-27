const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WadzPayToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WadzPayToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7F1Cc50E172f4ED999B710a02f8D3483798bf31c","0x82c13964ad22300000");
		});
	});
});