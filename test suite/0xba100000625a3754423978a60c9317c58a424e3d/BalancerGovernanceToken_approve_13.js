const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BalancerGovernanceToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BalancerGovernanceToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Balancer","BAL");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68655AD9852a99C87C0934c7290BB62CFa5D4123","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});