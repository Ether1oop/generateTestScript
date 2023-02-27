const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LockStakingRewardSameTokenFixedAPY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LockStakingRewardSameTokenFixedAPY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xEB58343b36C7528F23CAAe63a150240241310049","12","15552000");
		return {_contract,account0,account1,account2};
	}

	describe("getReward",function(){
		it("testing getReward",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).getReward();
		});
	});
});