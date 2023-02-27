const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UniLendToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UniLendToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("UniLend Finance Token","UFT","100000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6EA71aC12cAD648Be9665D07b7e8e7144C3110f0","0xd7daac31fb7bd18000");
		});
	});
});