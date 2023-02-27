const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XPRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XPRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5b05461BEb06669082eD53b9De8E698635049C24","0x5b8a7f28");
		});
	});
});