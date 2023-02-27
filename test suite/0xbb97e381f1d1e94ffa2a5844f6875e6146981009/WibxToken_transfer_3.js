const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WibxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WibxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x4261cDfEA93118677c04f880380d9b86b79C9b6a","0x194d1bA9EDb4Bd849CA844870C05AC5cFB632b14");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x49b29fa9fDD433c6E478316201F355A8821E2CC5","0x12327822215de47cc800");
		});
	});
});