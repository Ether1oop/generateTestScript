const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NAOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NAOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xC041a45837259272b14259432aF9912255f01FE3");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x5995383373DecBd673c2D3aB92e6118508f9B83e","0x01bc16d674ec7ff21f494c589c0000");
		});
	});
});