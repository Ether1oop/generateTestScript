const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GERA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GERA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xeFDF1f2Cc7d253c0ef9Ccf0747300A77F72Ca462","0x283dc9ef43eb0f3400");
		});
	});
});