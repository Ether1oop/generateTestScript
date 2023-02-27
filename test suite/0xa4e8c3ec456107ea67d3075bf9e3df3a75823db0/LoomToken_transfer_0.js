const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LoomToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LoomToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1d0fb90487d13de559cFAEBf63Daf4381D9D1e12","0x0f83a893770b4ffaec");
		});
	});
});