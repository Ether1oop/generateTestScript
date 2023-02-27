const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CelsiusToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CelsiusToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("7000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x28DAa79459a40397F4cc20dFCdf853740ED84955","0x690855");
		});
	});
});