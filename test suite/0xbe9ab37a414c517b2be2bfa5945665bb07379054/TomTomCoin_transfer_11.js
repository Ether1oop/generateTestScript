const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TomTomCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TomTomCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE93381fB4c4F14bDa253907b18faD305D799241a","0x2c8ad93ae1a755a88000");
		});
	});
});