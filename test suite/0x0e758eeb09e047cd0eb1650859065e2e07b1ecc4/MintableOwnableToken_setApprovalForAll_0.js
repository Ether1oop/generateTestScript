const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MintableOwnableToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MintableOwnableToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("TST1","TST1","https://api-mainnet.rarible.com/","https://ipfs.daonomic.com","0xf03Ba06Dd459AE597357b491219fCb573f5fe683");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x41340422F97f758e55b5d0CeD5B6Cdc84962F6e0",0);
		});
	});
});