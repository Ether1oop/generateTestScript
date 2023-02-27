const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("hToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("hToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("128756977746000000000000000000000","SDOG","SDOG","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xD29bA22AaA4e0c7a13863c611D749e1cc2556AAF","0x3e857e848f3ad99a8c0000");
		});
	});
});