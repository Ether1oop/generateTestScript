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

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x517ed378DBad5124541E55bB6757f4d20D94A5e4","0x02c560");
		});
	});
});