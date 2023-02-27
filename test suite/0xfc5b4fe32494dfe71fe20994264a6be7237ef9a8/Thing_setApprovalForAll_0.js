const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Thing",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Thing");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("NFT Advent","NFA","https://us-central1-thing-1d2be.cloudfunctions.net/getThing?thingId=","0xC6D528748da994E1601267141A77F639ac0d4Ace","0x66268791B55e1F5fA585D990326519F101407257");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xc5207AA6743eaE8a71486247787d83fa41c5b986",0);
		});
	});
});