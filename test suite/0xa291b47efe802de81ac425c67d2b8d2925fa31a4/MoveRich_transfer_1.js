const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MoveRich",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MoveRich");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xefb2A50467fF97c60895F8338b2DCedd0c543D20","0x0347b6062e8f47fe4000");
		});
	});
});