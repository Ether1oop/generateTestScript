const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TransactionBatcher",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TransactionBatcher");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("batchSend",function(){
		it("testing batchSend",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).batchSend(["C5E9dDebb09Cd64DfaCab4011A0D5cEDaf7c9BDb"],["0x00"],["0x9a72e0b30000000000000000000000008061b77c2f44beadf9ccaf30184f32dfdc27df7e000000000000000000000000b06145bc400005e39509a43ca62f521476aa7d4f000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"]);
		});
	});
});