const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Bukosu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Bukosu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xb417D0A91183a13d09F6a7a13f5D4fD0221c0d78","0x016345785d8a0000");
		});
	});
});