const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PHAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PHAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x93A2BaFDAC4804E82EfB0b6Aef1376f095f9E69E","0xbaf87d7a6a32440000");
		});
	});
});