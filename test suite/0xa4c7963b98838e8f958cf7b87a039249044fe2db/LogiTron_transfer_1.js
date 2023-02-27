const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LogiTron",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LogiTron");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xBE56c855f41Dad6847069627d9d2D40950d23880","0x152d02c7e14af6800000");
		});
	});
});