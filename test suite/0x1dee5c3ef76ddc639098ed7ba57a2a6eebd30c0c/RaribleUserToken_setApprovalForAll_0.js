const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RaribleUserToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RaribleUserToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("杂绪","T","https://api-mainnet.rarible.com/contractMetadata/","https://ipfs.daonomic.com","0xf03Ba06Dd459AE597357b491219fCb573f5fe683");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x4feE7B061C97C9c496b01DbcE9CDb10c02f0a0Be",1);
		});
	});
});