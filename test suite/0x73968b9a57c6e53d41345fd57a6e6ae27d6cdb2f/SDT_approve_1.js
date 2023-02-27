const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SDT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SDT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x0C30476f66034E11782938DF8e4384970B6c9e8a","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});