const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PROMToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PROMToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x53dB50Edf9Dd805c7a3C2dc35bFAd4FB4D01D310","0xc894f77c9ebdab8000");
		});
	});
});