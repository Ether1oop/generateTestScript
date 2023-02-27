const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETHAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETHAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6c38Ca871AefE37187e28A546c2870aCb45A98ba","0x31d1afdeede7fc0000");
		});
	});
});