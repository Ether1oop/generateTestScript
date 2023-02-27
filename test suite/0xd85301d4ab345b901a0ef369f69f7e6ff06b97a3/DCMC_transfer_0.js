const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DCMC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DCMC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x91A5e4F733822F5cbb1184aAa9ac9E24A5a36F02","0x3e5ac9b0c9f5ba");
		});
	});
});