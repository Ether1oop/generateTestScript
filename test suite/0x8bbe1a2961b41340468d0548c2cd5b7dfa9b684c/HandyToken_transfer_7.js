const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HandyToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HandyToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd2aAFECFd1Bb78a483b89Ad6741c2c167216A084","0xb7861cb9dd703acc0000");
		});
	});
});