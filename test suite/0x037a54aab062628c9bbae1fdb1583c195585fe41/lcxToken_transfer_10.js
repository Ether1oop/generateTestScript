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
			await _contract.connect(account0).transfer("0x35a8d2d6de6F5F9Ad579E270907E8a203a9283da","0x7cb8a7775bbec30000");
		});
	});
});