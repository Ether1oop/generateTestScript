const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SushiToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SushiToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x650F44eD6F1FE0E1417cb4b3115d52494B4D9b6D","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});