const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LogiTron",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LogiTron");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5E9DE35B1CC19A2939bd94c8255a60722D324536","0x163c0fb846284fa00000");
		});
	});
});