const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DCMC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DCMC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5c343dC4332408a10E351072a96017fdbe1e75d2","0x038d7ea4c68000");
		});
	});
});