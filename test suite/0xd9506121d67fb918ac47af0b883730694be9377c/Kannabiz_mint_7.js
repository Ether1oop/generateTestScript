const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Kannabiz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Kannabiz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0xce1adeb26d29fdbb9b7e0a39f3f6afc468591049f6408804c6ae4fd230d442e5","0x0000003c343d3284fa5316e00317ba8a083958d5e5ac4f30021d9a1dfd198d78");
		});
	});
});