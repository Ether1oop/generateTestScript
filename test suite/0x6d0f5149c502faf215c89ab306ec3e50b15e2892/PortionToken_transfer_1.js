const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PortionToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PortionToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x512eaC19C05870A0c8230aCB618D9e8A29EB040d","0x6ca33da5be7fd1c000");
		});
	});
});