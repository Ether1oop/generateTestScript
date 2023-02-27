const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenKeeper",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenKeeper");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x3c383B7Ffd5d2bF24EBd1fc8509ceFa9b7D1976f","300","0x4f81C790581b240A5C948Afd173620EcC8C71c8d");
		return {_contract,account0,account1,account2};
	}

	describe("scrapeMyTokens",function(){
		it("testing scrapeMyTokens",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).scrapeMyTokens();
		});
	});
});