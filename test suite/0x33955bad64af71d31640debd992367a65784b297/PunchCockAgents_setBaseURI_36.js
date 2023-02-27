const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PunchCockAgents",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PunchCockAgents");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("setBaseURI",function(){
		it("testing setBaseURI",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setBaseURI("https://bafybeidyvlshydk7wcjwtcxcgikxp5xv5ekb2by6nu47tkv6bisflkwjhm.ipfs.nftstorage.link/");
		});
	});
});