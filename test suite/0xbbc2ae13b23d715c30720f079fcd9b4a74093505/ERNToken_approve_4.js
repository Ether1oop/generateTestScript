const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERNToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERNToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("@EthernityChain $ERN Token","ERN");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xA70D0709987C5A27f2BAC0f39AbBc4d8cF6D03B4","0x010b46c6cdd6e3e0828f4db456ff0c8e9fffffffffffff");
		});
	});
});