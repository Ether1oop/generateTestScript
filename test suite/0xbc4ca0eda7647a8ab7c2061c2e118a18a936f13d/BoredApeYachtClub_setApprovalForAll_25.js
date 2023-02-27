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
			await _contract.connect(account0).setApprovalForAll("0xDef1C0ded9bec7F1a1670819833240f027b25EfF",0);
		});
	});
});