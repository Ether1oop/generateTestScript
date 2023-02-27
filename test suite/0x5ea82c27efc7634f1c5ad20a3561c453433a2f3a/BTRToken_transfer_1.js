const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BTRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BTRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd3556d45a3B3Ab1D388C680b086261A8f21e18ec","0x02bdf7796d41f5340000");
		});
	});
});