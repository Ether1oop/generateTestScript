const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MainframeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MainframeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x01e9A223e37caD58072d3EE4C05dE66f05A6BF2B","0x0b7f71c1b7bdd7e17c0000");
		});
	});
});