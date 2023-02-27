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

	describe("pay",function(){
		it("testing pay",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).pay("0x0cdb99c5e9238cee");
		});
	});
});