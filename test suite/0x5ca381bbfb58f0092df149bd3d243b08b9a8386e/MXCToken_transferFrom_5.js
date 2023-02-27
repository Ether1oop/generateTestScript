const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MXCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MXCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0x99645f47a6451BBb0f4aC0Ef3080a47FABf69e65","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x0f2c277f1607c2480000");
		});
	});
});