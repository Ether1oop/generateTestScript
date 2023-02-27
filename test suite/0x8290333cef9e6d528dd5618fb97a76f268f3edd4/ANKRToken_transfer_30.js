const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ANKRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ANKRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd6ef2665c607481dC252CB880a035BC1A260E566","0x010f0cf064dd59200000");
		});
	});
});