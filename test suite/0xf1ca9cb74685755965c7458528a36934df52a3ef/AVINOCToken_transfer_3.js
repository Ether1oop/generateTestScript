const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AVINOCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AVINOCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x603b4398e5444d8942A6D1C54a8F32921Cf32B26","0x8670e9ec6598c00086");
		});
	});
});