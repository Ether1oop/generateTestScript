const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x605928885a300eE246470820Bee29fd09E82Bf78","0x59c0e42a4d51c76746");
		});
	});
});