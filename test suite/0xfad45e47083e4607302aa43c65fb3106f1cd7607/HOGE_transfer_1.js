const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HOGE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HOGE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5a0b5E6f7570d8b6345c4E83f6080B50334AD865","0x01417e32f4500f6d");
		});
	});
});