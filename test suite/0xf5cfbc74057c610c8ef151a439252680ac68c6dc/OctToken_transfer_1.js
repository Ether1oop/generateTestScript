const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OctToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OctToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd25DCdB74a54606f5bec9a9108858D455CeCb333","0xae66f7ba9158bd7c00");
		});
	});
});