const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HMToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HMToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","Human Token","18","HMT");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6E9543f9059BA45b35a3fF1872dC872Ba2aE003b","0x26c989ddebfb5c0000");
		});
	});
});