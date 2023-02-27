const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MikotoV2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MikotoV2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x66668184952a9CAD32E14b6FdBb43827F1f2c709","0x01c755bafcfc00");
		});
	});
});