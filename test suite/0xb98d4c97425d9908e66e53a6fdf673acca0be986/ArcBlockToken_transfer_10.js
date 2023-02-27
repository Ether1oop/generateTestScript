const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ArcBlockToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ArcBlockToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xC98D744fB0eD8bfCd0efd628Be10F1f25F90A671","0x01967fc6912471f14000");
		});
	});
});