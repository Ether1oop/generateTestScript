const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PastelRasterByDPE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PastelRasterByDPE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("team",function(){
		it("testing team",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).team("10","0x775ef29864a26b02e208Af2e1fB2226844e0908B");
		});
	});
});