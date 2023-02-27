const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IndexToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IndexToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xe501D177fE2172E1dA8a6D338a44d9f89705ed5C");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254EEB25477B68fb85Ed929f73A960582","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});