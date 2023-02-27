const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Fraxferry",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Fraxferry");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x853d955aCEf822Db058eb8505911ED77F175b99e","1","0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F","42161");
		return {_contract,account0,account1,account2};
	}

	describe("embarkWithRecipient",function(){
		it("testing embarkWithRecipient",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).embarkWithRecipient("0x021e19e0c9bab2400000","0xff1FC55B3B5D2cc62b82d1F77dA88355e8175254");
		});
	});
});