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
			await _contract.connect(account0).transfer("0xc3Eb0eE3bD8021eB18BFbA1e3caC619C3193F948","0x0158b2c73cb416b3a1c000");
		});
	});
});