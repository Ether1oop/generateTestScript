const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("QuiztokToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("QuiztokToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd69DAb5F6954178d669aa12A9f72aE2ec8255DFD","0x054ab5ead54e33b80000");
		});
	});
});