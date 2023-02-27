const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Gifto",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Gifto");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x476927e24DF31425cd29B87803f8b664805bB25b","0xed1b7680");
		});
	});
});