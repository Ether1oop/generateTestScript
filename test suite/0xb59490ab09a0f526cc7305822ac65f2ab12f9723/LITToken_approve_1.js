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

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x11bCE4536296C81d1A291B1FFbe292FDd55a3A89","0x084595161401484a000000");
		});
	});
});