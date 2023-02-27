const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UNIVERSE_ENERGY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UNIVERSE_ENERGY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5617C306785f16DcEd4b793e279Ed9D23c3Debfc","0x32c2ec37629bd400");
		});
	});
});