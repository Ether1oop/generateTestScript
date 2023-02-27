const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DIAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DIAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFFdB48AcEDDdED693728059E99a3bB67cA755be3","0x0176b344f2a78c0000");
		});
	});
});