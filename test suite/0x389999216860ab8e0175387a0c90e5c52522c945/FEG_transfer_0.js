const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FEG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FEG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x2DE35b03518Aab4328e5eEc44fec4A2cc0C89032","0x566c9a6b63d1fc3c00");
		});
	});
});