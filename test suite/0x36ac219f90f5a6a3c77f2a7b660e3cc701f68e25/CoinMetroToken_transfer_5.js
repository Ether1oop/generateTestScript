const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinMetroToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinMetroToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x049A427197aBACFa0e594045b283B37e1f4a3eB3","0x3ba1910bf341b03217");
		});
	});
});