const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BCCG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BCCG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xa5409ec958C83C3f309868babACA7c86DCB077c1");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xFED24eC7E22f573c2e08AEF55aA6797Ca2b3A051",0);
		});
	});
});