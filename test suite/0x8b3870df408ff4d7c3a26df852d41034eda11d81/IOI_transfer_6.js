const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IOI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IOI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xBf5Ae133b9A0fc1A07952A7df2aFa21F7F69EF58","0x03c110b700");
		});
	});
});