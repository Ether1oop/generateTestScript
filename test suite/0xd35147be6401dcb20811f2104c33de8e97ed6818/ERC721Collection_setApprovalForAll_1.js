const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC721Collection",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC721Collection");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("dcl://exclusive_masks","DCLEXCLSVMSKS","0x93A7C46443901c2eA2fc1263a4d076F470695d3A","https://wearable-api.decentraland.org/v2/standards/erc721-metadata/collections/exclusive_masks/wearables/");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xc5207AA6743eaE8a71486247787d83fa41c5b986",0);
		});
	});
});