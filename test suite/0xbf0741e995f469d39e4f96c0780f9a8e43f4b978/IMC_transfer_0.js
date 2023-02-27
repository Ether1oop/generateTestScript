const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IMC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IMC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9065232bB8dc869bbE46F2e1f1093bce994B06fb","0x121ae07b48b540638000");
		});
	});
});