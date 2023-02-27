const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GasToken2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GasToken2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("free",function(){
		it("testing free",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).free("0x0a");
		});
	});
});