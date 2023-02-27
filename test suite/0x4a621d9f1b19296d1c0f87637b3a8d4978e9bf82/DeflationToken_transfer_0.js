const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DeflationToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DeflationToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4a621d9f1b19296d1C0f87637b3A8D4978e9bf82","0x28f33387abca3625200000");
		});
	});
});