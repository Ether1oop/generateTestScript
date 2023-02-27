const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DZARToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DZARToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("500000000000","Digital Rand","DZAR","6");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x45A8DeAcF5dCCe90a72e0146C582efc437504826","0xee6b2800");
		});
	});
});