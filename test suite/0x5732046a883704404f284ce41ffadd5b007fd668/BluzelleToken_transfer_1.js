const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BluzelleToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BluzelleToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8f4022E727683dd04F8d4830Ef9989bf4b067809","0x010f6475a835b633a800");
		});
	});
});