const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("JEX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("JEX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("20000000000000","JEX Token","4","JEX");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3bb471700fA7a925bd217f2B0FfCBCb19881f759","0x233acb");
		});
	});
});