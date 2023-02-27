const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Flux",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Flux");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x41BD8bbD3F6485d4c0796CD00914C1137c5802D2","0x6e8ce618");
		});
	});
});