const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CellToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CellToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Cellframe Token","CELL","30300000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0DAc84a18e5063213cfc4400de2aA0ba6D1EBf73","0x0cb49b44ba602d800000");
		});
	});
});