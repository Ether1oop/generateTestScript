const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LRC_v2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LRC_v2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7D69FD776b727e74857d4857a7dD5e3967887208","0x04b951b0bf2686100000");
		});
	});
});