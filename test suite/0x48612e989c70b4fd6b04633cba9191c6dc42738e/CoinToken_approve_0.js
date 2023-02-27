const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("HAXI","TRX","18","2000000000","0","0","0x0000000000000000000000000000000000000000","0x1fbbbc8c124b27E84676b315292f719427b62Fe7","0x40741855d34f4B9E4061B776BB1E9a7F1841151c");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xC36442b4a4522E871399CD717aBDD847Ab11FE88","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});