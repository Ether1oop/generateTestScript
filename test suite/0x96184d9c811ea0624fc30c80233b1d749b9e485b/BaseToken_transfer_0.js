const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BaseToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BaseToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Dapp Token","DAPPT","18","5000000000000000000000000000","5000000000000000000000000000",1,0);
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6c431d871a901dBf81624bc0fEEfad377d64fF4B","0x2a5a058fc295ed000000");
		});
	});
});