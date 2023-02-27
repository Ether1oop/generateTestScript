const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BlockvToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BlockvToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x6CFA1A9CB5C94087f418B3cA45338e5Fd9c511B9");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x881D40237659C251811CEC9c364ef91dC08D300C","0x00");
		});
	});
});