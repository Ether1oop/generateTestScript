const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KtuneTokenBlocks",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KtuneTokenBlocks");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6385531Bb33b323d2953188934A9761F57DD9483","0x1544453817c5b38a400000");
		});
	});
});