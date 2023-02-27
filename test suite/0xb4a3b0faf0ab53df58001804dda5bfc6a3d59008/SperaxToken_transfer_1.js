const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SperaxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SperaxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Sperax","SPA","18","5000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x02d90Dd98Bbd35167045a8418AB59a2364f25766","0x2a5a058fc295ed000000");
		});
	});
});