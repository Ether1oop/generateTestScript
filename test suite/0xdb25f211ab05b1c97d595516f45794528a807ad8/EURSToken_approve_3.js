const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EURSToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EURSToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x70250fcFEf983C9b912c8EEFB7021B4b7baE836e");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254fb6c44bAC0beD2854e76F90643097d","0x040074");
		});
	});
});