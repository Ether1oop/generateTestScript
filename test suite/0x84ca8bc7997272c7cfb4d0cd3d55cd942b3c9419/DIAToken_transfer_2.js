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
			await _contract.connect(account0).transfer("0x300887eB6499A9a48960E6602aD9735762903319","0xeba64a14d8678c6000");
		});
	});
});