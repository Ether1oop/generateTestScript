const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WBTC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WBTC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xBA12222222228d8Ba445958a75a0704d566BF2C8","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});