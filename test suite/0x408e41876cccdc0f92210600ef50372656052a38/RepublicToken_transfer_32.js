const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RepublicToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RepublicToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x285dc4c65dc4D8d2F88F1246A4bfC56a720448D1","0x418c8b3a3a3d081000");
		});
	});
});