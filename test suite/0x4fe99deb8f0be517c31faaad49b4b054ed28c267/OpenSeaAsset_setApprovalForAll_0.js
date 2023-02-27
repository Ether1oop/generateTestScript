const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OpenSeaAsset",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OpenSeaAsset");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("365DAYS","DAYS","0xa5409ec958C83C3f309868babACA7c86DCB077c1","https://api.opensea.io/api/v1/metadata/");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});