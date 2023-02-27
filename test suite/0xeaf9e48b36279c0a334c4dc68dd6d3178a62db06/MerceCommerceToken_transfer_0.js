const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MerceCommerceToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MerceCommerceToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("4000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE057e04c1056Df4598c6C817fc442947627f1c49","0x2da131b78207d3e00000");
		});
	});
});