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
			await _contract.connect(account0).transfer("0xBe0809392F6B264268F242b910446A60AD3C465b","0x3c6eb29882c3ee200000");
		});
	});
});