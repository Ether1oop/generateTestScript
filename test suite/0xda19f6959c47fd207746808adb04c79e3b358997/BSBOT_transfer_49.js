const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BSBOT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BSBOT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3C40024F65bb4c6cA2FbEF3AEFf0b87c0e1Eb697","0x120d4da7b0bd140000");
		});
	});
});