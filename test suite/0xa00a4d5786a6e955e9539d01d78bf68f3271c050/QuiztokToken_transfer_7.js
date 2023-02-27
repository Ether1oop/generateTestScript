const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("QuiztokToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("QuiztokToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x54cC7EBd646BdD68Aa6b81e573172A5B709Dc79D","0x0c9e61601ea617580000");
		});
	});
});