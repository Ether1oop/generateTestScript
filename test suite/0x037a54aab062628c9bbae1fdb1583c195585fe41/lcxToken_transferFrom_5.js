const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("lcxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("lcxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0xe1179A3261d09c23a53f75aC31EE165a5E45eA72","0xbC4E4069B1cb2fc1256A2bf454aE3AFfb4E05a4D","0x0440a7564b307fed2000");
		});
	});
});