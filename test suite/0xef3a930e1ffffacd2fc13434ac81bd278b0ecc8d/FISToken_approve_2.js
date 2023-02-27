const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FISToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FISToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x2b6B6fCE3af32efE4430E446717BDa72B95EBb9a","0x084595161401484a000000");
		});
	});
});