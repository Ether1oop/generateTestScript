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
			await _contract.connect(account0).batchSend(["988b3A538b618C7A603e1c11Ab82Cd16dbE28069","988b3A538b618C7A603e1c11Ab82Cd16dbE28069"],["0x00","0x00"],["0x115d53760000000000000000000000000000000000000000000000000000000000000575","0x115d53760000000000000000000000000000000000000000000000000000000000000575"]);
		});
	});
});