const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LOKPay",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LOKPay");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("take",function(){
		it("testing take",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).take("0x0104b848a33cd484b9fbdca4593c3bc03ae6015c5b9497eddd175890");
		});
	});
});