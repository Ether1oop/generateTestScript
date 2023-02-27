const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Kannabiz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Kannabiz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x4afcf888d53813772f0687f61b6e976249a1715eb81875e6cc9210cd465bc117","0x000003384330021327900c4ae62899d14a04bec9272a19e03308ece20d78c29f");
		});
	});
});