const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EgretiaToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EgretiaToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5Bc6e6a7D31c428E3bF0764c8A98b6fa96dA5491","0x0aa0797d3ef90a5aa800");
		});
	});
});