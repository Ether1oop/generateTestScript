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
			await _contract.connect(account0).transfer("0x2d6eE5C8A3b2370CBC0de309bf5d1a4Aa09c3918","0x0130bc4dbbe47920e40000");
		});
	});
});