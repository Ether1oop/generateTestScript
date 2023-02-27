const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("O3",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("O3");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xb80FDc10c08b717DF6d7a47890a62c9088324B47","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});