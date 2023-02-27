const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETH_RUNE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETH_RUNE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xCde0Fa2c5432C1d64C6b32860A1f0CF67a9AFf54","0x0b18cb792afc6717eb");
		});
	});
});