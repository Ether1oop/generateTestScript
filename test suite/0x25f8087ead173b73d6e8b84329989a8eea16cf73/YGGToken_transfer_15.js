const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YGGToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YGGToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x32b0d8a49A96Afe9F2291daE2f4340a056c721Cc","0x2c031f768c26c8b240");
		});
	});
});