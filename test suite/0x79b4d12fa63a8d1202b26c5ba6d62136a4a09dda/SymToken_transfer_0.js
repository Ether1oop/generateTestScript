const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SymToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SymToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xef58b43059DA9427A595331A015a36C17F8BDD13","0x584d9d840f4fa2a00000");
		});
	});
});