const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IOSToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IOSToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xeF624EF0817923441c4F3060814E43cdD986B816","0x021a38f78ab224bf3419");
		});
	});
});