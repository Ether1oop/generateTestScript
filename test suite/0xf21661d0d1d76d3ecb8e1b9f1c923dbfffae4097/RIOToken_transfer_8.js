const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RIOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RIOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5E1C7f0EF930D79598f9fAdBACA3c1beA400e6F7","0x0eeac6e263b131300000");
		});
	});
});