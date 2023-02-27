const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AureusNummusGold",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AureusNummusGold");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xeb23cfF599E0f3659a3369276392CFDF97034df0","0x878678326eac900000");
		});
	});
});