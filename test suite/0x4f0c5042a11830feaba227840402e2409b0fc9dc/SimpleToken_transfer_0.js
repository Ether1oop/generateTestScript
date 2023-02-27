const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SimpleToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SimpleToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xb64BDdF93B2Af5D17c2023cfc3c74B29F3790Be9","0x6091a5b788c3ab9000");
		});
	});
});