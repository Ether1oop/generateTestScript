const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CreateToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CreateToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("unlock",function(){
		it("testing unlock",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).unlock("0x62e3600b2a0002ebB3055F7551214Ad64Da0E465");
		});
	});
});