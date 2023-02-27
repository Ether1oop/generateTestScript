const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MainframeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MainframeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8643c3C5D96a0bC4977F11e06c195fEa6bd2Fdc2","0x36f4e0e17d9e83f40000");
		});
	});
});