const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RaribleToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RaribleToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Rarible","RARI","0xf03Ba06Dd459AE597357b491219fCb573f5fe683","https://api-mainnet.rarible.com/contractMetadata/{address}","https://ipfs.daonomic.com");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",0);
		});
	});
});