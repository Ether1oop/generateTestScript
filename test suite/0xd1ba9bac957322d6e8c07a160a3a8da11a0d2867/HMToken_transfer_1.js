const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HMToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HMToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","Human Token","18","HMT");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2532C5a55dE0430034A45803432C17a0fC82228d","0x02c9b22d79ff9711497e");
		});
	});
});