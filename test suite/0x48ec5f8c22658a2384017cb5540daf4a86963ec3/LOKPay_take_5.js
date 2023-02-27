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
			await _contract.connect(account0).take("0x01044b160c5f697840ba26e5289e8cc88bcd58fb5e9897ed74adb5c8");
		});
	});
});