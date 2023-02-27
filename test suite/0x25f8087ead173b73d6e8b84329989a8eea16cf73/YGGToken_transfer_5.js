const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YGGToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YGGToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf3Ac9Be9e56a9f0DCfe5C10D10D502E81Eb4fa80","0x09bdb59e7335cc920000");
		});
	});
});