const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LITToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LITToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x10881Ce5966DFa06CE25af137b10a27c67c745a8","0x032cf6a943fa90c50000");
		});
	});
});