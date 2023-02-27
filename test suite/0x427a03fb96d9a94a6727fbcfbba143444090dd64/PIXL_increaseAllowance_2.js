const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PIXL",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PIXL");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("increaseAllowance",function(){
		it("testing increaseAllowance",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).increaseAllowance("0x38e6B922545Cd931030AD7FB4C00409a04b213C4","0x015fa935a266a6fc0000");
		});
	});
});