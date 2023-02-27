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

	describe("payBy",function(){
		it("testing payBy",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).payBy("0x61E90A50137E1F645c9eF4a0d3A4f01477738406","0x0cdc45d5e88ffaca","0x0969187ed74dee8800");
		});
	});
});