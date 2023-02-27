const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UniswapV2Pair",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UniswapV2Pair");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x2040726132171f2F9472b1Bd0E5CeAdb3BAE002C","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});