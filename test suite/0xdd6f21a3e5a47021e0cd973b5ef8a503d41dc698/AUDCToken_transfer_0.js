const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AUDCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AUDCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","AUDC","AUDC","2");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4cDB21a74Dd6d6337Ff1521370e1Deef27E0ceb4","0x989680");
		});
	});
});