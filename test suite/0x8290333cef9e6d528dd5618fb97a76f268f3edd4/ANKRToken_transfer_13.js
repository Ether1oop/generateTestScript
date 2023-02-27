const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ANKRToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ANKRToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x48c04ed5691981C42154C6167398f95e8f38a7fF","0x71d75ab9b920500000");
		});
	});
});