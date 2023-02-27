const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ROOTx",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ROOTx");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xE22e1e620dffb03065CD77dB0162249c0c91bf01");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x5e1ee3988DE358155F723D72875f45668edc97DE","0x04f3b37dab55788e6dc0");
		});
	});
});