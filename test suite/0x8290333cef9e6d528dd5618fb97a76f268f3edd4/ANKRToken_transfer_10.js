const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ANKRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ANKRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x03526f1cae54d1f8c400");
		});
	});
});