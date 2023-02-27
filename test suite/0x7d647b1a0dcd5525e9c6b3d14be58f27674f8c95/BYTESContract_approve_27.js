const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BYTESContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BYTESContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x95E6F48254609A6ee006F7D493c8e5fB97094ceF","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});