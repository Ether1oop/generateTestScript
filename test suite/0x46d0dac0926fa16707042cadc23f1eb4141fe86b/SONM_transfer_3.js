const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SONM",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SONM");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9759Cb9E1865ebc76cA3e3B6C6eb5e063F18Ea75","0x023616f45682356b7000");
		});
	});
});