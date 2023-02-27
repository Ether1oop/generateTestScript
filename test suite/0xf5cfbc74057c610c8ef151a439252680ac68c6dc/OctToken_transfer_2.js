const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OctToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OctToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0753CA3C4CCf5D522f7da66A2a9863E45dF35bf6","0x010e3cc5b0568a440000");
		});
	});
});