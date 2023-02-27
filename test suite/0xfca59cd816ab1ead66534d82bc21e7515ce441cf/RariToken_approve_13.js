const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RariToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RariToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xB8e4526E0DA700E9eF1F879AF713d691f81507D8","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});