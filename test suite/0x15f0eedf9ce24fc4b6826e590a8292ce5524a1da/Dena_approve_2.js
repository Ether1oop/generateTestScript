const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dena",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dena");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x38b49B879562046412A62c02A88DC867b9AFd9c1","0x38b49B879562046412A62c02A88DC867b9AFd9c1","1731974400");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x40ec5B33f54e0E8A33A975908C5BA1c14e5BbbDf","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});