const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CipherCore",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CipherCore");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6f0782fBC413fF2F3E41F70Ab1E9A5D31cdD05b8","0x6553f100");
		});
	});
});