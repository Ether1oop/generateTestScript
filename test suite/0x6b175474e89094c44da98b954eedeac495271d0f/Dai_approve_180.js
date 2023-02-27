const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dai",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dai");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x5EE84583f67D5EcEa5420dBb42b462896E7f8D06","0x8ac1f891ea1b355d");
		});
	});
});