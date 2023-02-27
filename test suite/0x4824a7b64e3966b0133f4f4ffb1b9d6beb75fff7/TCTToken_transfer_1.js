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
			await _contract.connect(account0).transfer("0xF1A6f7C1aFEAF33D8aAF6245a04742605F0D22cA","0x0a7c6f2559b906a30000");
		});
	});
});