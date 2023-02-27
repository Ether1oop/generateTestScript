const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dollar",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dollar");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x216B4B4Ba9F3e719726886d34a177484278Bfcae","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});