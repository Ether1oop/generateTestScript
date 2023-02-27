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
			await _contract.connect(account0).transfer("0x87c67725066E53ED361B4DCC020CB12Db7C366EA","0x03d339247b94cd0c0000");
		});
	});
});