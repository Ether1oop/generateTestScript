const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EAC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EAC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2E3EC869B9412Ff85F2da22ec2f81dABe5E96465","0x3635c9adc5dea00000");
		});
	});
});