const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MVLToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MVLToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x225AFc8Ceb23d96A60351Ff3287462a0Bf1C570F","0x0316b4998d5ad0d9240000");
		});
	});
});