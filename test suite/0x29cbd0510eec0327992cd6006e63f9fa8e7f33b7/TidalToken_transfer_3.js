const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TidalToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TidalToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x89762902c4a097FD5Ce2f1061F07742f59D92AdC","0x012101cee61fd0f7904000");
		});
	});
});