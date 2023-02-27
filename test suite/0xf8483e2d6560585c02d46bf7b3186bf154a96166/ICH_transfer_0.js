const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ICH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ICH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf8483E2d6560585C02D46bF7B3186Bf154a96166","0x673afef5ae");
		});
	});
});