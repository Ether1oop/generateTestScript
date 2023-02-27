const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Terareum",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Terareum");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6cc8dCbCA746a6E4Fdefb98E1d0DF903b107fd21","0x03aa70ebf9e3db13899d980000");
		});
	});
});