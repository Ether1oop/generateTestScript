const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETH_RUNE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETH_RUNE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9902D7Ffe11FEEa6A6a281621C98617dd6070770","0x0201537b59a5a3d809");
		});
	});
});