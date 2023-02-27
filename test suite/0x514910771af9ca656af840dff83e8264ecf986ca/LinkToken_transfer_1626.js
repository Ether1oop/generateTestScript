const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LinkToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LinkToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x61fD13796581097CFFefba744B785b20Bc109cDd","0x01d50265e0d14a2400");
		});
	});
});