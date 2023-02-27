const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BEP20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BEP20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xeC7c5f995AD8CdBD773F67b7282da90620e50CD6","0x0b3922c0f9f717200000");
		});
	});
});