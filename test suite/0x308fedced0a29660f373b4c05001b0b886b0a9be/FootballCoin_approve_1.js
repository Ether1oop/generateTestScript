const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FootballCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FootballCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x91c8D7e4080bed28e26FCE1b87cACcFaF7bbF794","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});