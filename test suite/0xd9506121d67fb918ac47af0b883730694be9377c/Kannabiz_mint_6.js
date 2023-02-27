const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Kannabiz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Kannabiz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x0b648a4f155b0ccdc552face55946bd9c19ec09cdfc9a38ba92005a673e5a4df","0x00000283b447f1c93c58e1a874d7fd3c9aaea6ea7e85be4d7f53fbb61b52d2ac");
		});
	});
});