const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NuriFootball",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NuriFootball");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xEcc4332289b10a5dA923aDA0045CE5E6e988C5d5","0x01d64d");
		});
	});
});