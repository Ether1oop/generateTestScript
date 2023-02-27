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
			await _contract.connect(account0).transfer("0x3F690C7E9dfde3f485b3F503842395474f06D482","0x5b6d471864460000");
		});
	});
});