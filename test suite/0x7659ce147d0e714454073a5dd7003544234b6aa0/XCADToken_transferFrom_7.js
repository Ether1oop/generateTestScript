const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XCADToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XCADToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0x2B2587408A26B215c21C9FA77928271F15752d26","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x57bff5227b9870ca09");
		});
	});
});