const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WBTC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WBTC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x14aC5b3580dD1e546CD7287Cd1faDba9A8736628","0x01e5bcfd");
		});
	});
});