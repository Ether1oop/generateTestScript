const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SportsDataToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SportsDataToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7B79F016168352c1EbB60d8bC9F2ffC8010a0f23","0x3673b21ccb4b58180000");
		});
	});
});