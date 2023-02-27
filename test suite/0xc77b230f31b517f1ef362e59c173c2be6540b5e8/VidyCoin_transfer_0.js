const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("VidyCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("VidyCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x36987324DAFBaad100383a877E14D5E1122C12aF","0x53c3bae3c8363f5c0000");
		});
	});
});