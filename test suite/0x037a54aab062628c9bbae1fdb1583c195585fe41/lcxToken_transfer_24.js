const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("lcxToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("lcxToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xd8Aa1546f4A078D3a9EB1E89F58f393B081dcBEa","0x11996ad377d385a000");
		});
	});
});