const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TRIX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TRIX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xcCC6538133dd4355b548BA4E393e3fd303559b8F","0x1abf48b19d03abb8f400");
		});
	});
});