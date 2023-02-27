const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IoTeXNetwork",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IoTeXNetwork");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("10000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf6087a64bf140B566022F8334B78c3261b796F46","0x32aea1f8086b889fc000");
		});
	});
});