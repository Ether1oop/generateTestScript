const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RSGL",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RSGL");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xbb4eB8fF4e63762e78b8679212026D562BD7ad63","0x152d02c7e14af6800000");
		});
	});
});