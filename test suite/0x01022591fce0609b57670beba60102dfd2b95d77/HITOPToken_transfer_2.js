const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HITOPToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HITOPToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x377821c89B5aA922b99Ec8788008f550F73e3a1d","0x17d6a615ad62b8380000");
		});
	});
});