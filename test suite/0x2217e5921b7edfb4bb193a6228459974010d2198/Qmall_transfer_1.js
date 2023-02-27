const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Qmall",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Qmall");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1bf103668876F99e3e6868c82d01DEF2a246353f","0x87a507912774eba1dc");
		});
	});
});