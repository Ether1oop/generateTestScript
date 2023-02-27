const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Blockmed",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Blockmed");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x120051a72966950B8ce12eB5496B5D1eEEC1541B","0x03f05cbb23ada1040000");
		});
	});
});