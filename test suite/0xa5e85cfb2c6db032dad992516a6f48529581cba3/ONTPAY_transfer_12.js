const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ONTPAY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ONTPAY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0E797896De73Ee93EA43Cdb8F5c93373C94291d5","0x0103b87b3c31b07c0000");
		});
	});
});