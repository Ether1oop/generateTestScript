const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NiftyBuilderInstance",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NiftyBuilderInstance");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("There shall be nifties!!","THERESHALLBENIFTIES","1","2",["5","50"],"https://api.niftygateway.com/test-store/","None");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xc5207AA6743eaE8a71486247787d83fa41c5b986",0);
		});
	});
});