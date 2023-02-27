const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XCADToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XCADToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x67A25258109C04FED178C4A1F7541BAf2ed5e357","0x0d0b22d043755dac00");
		});
	});
});