const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UtrustToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UtrustToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8f038cDFb8868ADe36e67442F4E312FEa3473afa","0xa11aecfd610d090000");
		});
	});
});