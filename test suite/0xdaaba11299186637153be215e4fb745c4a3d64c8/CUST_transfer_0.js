const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CUST",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CUST");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x288c31eCFafBEb50D67c92295C26C6535896a7D1","0x078f4d06554b25500000");
		});
	});
});