const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LifeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LifeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x83E544e82761A1136b2bC7705ee7864fc5d9eA7E","0x6a2062130c05b3950000");
		});
	});
});