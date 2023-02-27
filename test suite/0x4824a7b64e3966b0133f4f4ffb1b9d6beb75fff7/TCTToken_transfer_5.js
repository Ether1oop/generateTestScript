const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TCTToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TCTToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","TokenClub Token","TCT","18");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xfB4F302877892bcE9787dB26889382ff7F4B5fD2","0x024bfea68b9f4f8a7c4000");
		});
	});
});