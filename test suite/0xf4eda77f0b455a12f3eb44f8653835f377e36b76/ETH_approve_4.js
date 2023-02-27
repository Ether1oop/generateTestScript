const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xEfF92A263d31888d860bD50809A8D171709b7b1c","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});