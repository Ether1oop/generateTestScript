const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DuskToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DuskToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0906b7432D430896592f76875e84633fcb54F8e1","0x06eaa64c217e1ee00000");
		});
	});
});