const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NODE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NODE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x774a6acD9e30f3d6b1500fF5A2B8160871D45d32","0x3f2a865165");
		});
	});
});