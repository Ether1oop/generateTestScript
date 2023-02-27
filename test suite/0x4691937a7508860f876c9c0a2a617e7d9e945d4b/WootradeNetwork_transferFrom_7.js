const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WootradeNetwork",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WootradeNetwork");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("3000000000000000000000000000","Wootrade Network","18","WOO");
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0x92C25b3125A7Ad093329F22EE0845570d4f86F23","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x0a0a46543219a6c80000");
		});
	});
});