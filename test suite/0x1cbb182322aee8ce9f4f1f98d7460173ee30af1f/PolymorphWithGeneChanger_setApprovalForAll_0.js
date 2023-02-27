const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PolymorphWithGeneChanger",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PolymorphWithGeneChanger");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Polymorphs","MORPH","https://us-central1-polymorphmetadata.cloudfunctions.net/images-function?id=","0xa8047C2a86D5A188B0e15C3C10E2bc144cB272C2","0","10000000000000000","77700000000000000","10000","10000000000000000","20","https://arweave.net/5KDDRA5EE9p-Bw29ryB9Uz6SvMRNMCyXKkOzW_ZT9gA");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});