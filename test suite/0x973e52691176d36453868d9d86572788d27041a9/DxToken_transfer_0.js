const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x87131eb477b9dFf7D2A42EF445c9847223EF72A2","0xcfd56ec430f8768c0000");
		});
	});
});