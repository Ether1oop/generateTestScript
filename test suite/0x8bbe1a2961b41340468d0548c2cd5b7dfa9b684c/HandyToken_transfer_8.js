const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HandyToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HandyToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE76b8360056715f5F9042271923F7C1E7b782087","0x789f297db7e537d00000");
		});
	});
});