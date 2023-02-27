const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PsychonautApeDivision",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PsychonautApeDivision");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xbfb49C02369AF568e1D9B5ce1E3584FcF943Baf8","temp");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x35CA26A7a7F3ca98F3e60BD94C139C892e45B6C3",1);
		});
	});
});