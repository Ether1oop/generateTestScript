const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Terareum",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Terareum");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE0a616C3659bE29567E08819772e6905307AdF21","0x030e2448f3a9fbeac8ff85c031");
		});
	});
});