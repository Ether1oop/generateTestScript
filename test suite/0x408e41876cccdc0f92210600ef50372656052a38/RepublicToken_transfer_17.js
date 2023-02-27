const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RepublicToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RepublicToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x551568a9430B888f93D31fa6Df4973c55A6c667D","0x14e11000041be43c0000");
		});
	});
});