const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DIAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DIAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x361e45A9755a67b9b6E7D6832C5E085Da081E90b","0x056bc75e2d63100000");
		});
	});
});