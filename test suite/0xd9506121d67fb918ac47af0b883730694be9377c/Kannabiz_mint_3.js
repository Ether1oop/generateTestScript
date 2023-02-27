const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Kannabiz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Kannabiz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x16adb5ba7329a0c0ac9467e2406071a62c0677af98ff08b42a5da2b296e68457","0x0000033a3b0aff44e6d59d5d35e31eaf92362974ffe8ac74453e9f4559e80636");
		});
	});
});