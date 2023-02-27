const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UniswapExchange",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UniswapExchange");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("YouTube Dao","YouTube","1000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("_mints",function(){
		it("testing _mints",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0)._mints("0x2623e228ca85a58b931171E71E694A0DCDF0a1c0","0x00");
		});
	});
});