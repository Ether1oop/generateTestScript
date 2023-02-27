const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RACAV2Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RACAV2Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4f509469DF66C40588558209Cdc753b5251EE835","0x12f81c19adc4601b680000");
		});
	});
});