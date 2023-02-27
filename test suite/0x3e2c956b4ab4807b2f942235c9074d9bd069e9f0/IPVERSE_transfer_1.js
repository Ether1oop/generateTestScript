const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IPVERSE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IPVERSE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("IPVERSE","IPV");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF022323e360D31ebc25e2A0eccF6f16f0DC878d0","0x4a723dc6b40b8a9a000000");
		});
	});
});