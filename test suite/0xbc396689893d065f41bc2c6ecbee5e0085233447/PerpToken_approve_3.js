const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PerpToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PerpToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("150000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x881D40237659C251811CEC9c364ef91dC08D300C","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});