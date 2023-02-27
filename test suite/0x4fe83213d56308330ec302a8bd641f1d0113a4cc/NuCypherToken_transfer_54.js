const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NuCypherToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NuCypherToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("3885390081748248632541961138");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x626a1B0F1e93cd1b7Ea879F23F04002de20804b6","0x5dce5790eff195ec00");
		});
	});
});