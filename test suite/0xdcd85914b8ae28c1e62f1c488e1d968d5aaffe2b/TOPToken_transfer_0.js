const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TOPToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TOPToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5F4ca7f1fC4FfD233323cBe60ca0C7e3a880D5B9","0x038d7ea4c68000");
		});
	});
});