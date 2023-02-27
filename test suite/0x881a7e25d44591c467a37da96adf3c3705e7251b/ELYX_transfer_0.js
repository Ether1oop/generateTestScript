const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ELYX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ELYX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x10d9D9f26169d154587326Df8a83d3ffBd87A828","0xb83acb648e7293c00000");
		});
	});
});