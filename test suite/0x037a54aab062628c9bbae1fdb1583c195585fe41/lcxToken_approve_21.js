const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("lcxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("lcxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x367e59b559283C8506207d75B0c5D8C66c4Cd4B7","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});