const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Fnk",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Fnk");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x0e3EB2eAB0e524b69C79E24910f4318dB46bAa9c","0x6f05b59d3b200000");
		});
	});
});