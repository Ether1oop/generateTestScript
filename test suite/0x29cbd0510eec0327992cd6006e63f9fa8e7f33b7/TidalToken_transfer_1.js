const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TidalToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TidalToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x012f548c14b2f4eb1dd551");
		});
	});
});