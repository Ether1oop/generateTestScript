const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LDNToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LDNToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xeA231ba6954c90D5f9b6285AC746cE6FFBCdeFce","0x05ad1c6b89805f86a800");
		});
	});
});