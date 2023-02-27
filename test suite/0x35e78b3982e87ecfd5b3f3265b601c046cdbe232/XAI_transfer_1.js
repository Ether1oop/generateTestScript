const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XAI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XAI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3808708e761B988d23Ae011Ed0e12674Fb66bD62","0x058a9141e942471b0000");
		});
	});
});