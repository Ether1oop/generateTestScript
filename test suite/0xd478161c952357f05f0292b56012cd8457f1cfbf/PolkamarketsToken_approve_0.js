const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PolkamarketsToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PolkamarketsToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x763e3Ee4EE9Cac68200e0d358Ab10f5136206008","0x531a9F9F384be2a3ACD9581d574BD47E65Ac8273","0xaFEa4511E634928F3A70B18aE565cd07736b7a04","0x126B53A1b0F6D036F4EF93a4e5af984Bb4b95861","0xa6972Fd8B71E7aF7173e18a3eD986114bb721805");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D","0x00");
		});
	});
});