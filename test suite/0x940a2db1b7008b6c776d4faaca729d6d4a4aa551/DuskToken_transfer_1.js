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
			await _contract.connect(account0).transfer("0xFE0c760CBcb9dA239b9bA805f0aEaED3Be84F65A","0x0487f6e0b5f0071e8000");
		});
	});
});