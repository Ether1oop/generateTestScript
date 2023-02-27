const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FaucetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FaucetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x7273d1671fCd37Ef5b949Ebf88234AA9c3E43957","0x1d6329f1c35ca4bfabac14aa4c589c0000");
		});
	});
});