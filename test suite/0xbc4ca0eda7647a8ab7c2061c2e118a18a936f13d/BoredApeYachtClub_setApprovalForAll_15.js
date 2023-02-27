const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BoredApeYachtClub",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BoredApeYachtClub");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("BoredApeYachtClub","BAYC","10000","1619060439");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",0);
		});
	});
});