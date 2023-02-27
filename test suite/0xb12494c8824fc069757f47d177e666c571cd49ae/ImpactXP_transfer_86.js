const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ImpactXP",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ImpactXP");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3aB28eCeDEa6cdb6feeD398E93Ae8c7b316B1182","0x0c146d6cb3b798b9f7");
		});
	});
});