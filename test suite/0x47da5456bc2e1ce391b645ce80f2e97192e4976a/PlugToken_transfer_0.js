const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PlugToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PlugToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x92fBA783dA0373aA080049D15f273b35AF71C2c3","0x52b6c3cfd7a7f58ae00000");
		});
	});
});