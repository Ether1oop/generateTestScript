const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SocialGoodToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SocialGoodToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x53AF215278b88AdaD04226b2b8eE64aed369C7B2","0x03f870857a3e0e38000000");
		});
	});
});