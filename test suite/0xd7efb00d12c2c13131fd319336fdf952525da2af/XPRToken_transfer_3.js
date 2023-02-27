const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XPRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XPRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x07922E5B4EbbCE5177e194AA1732b0A6b9aebEb4","0x01c9c380");
		});
	});
});