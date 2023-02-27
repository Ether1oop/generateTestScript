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
			await _contract.connect(account0).approve("0x4D9079Bb4165aeb4084c526a32695dCfd2F77381","0x01f426c2");
		});
	});
});