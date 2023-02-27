const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NewEarthCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NewEarthCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6a99De9DB08494c98aAA361DCA823B4f0dD838c8","0x04d14d17f8b3b61b100000");
		});
	});
});