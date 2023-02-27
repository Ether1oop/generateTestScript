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
			await _contract.connect(account0).transfer("0xd9A361FDCc4aE1a4c499c7CDD0224DbC3c353715","0x2064b9ea12e14ac000");
		});
	});
});