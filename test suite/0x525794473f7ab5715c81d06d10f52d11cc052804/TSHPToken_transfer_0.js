const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TSHPToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TSHPToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x00F08A8aD703Eb7e330aF6bBA96Fa4E8081143CC","0x1b649b7cc2c702405cfb");
		});
	});
});