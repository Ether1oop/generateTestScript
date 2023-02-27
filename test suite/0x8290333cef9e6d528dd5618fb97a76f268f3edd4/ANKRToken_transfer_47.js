const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ANKRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ANKRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xbD98f376A25762315BB8867849a33c22f9ef9ffD","0x439eb747e5e5da6400");
		});
	});
});