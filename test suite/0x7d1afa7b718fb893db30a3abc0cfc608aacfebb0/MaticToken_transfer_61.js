const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MaticToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MaticToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Matic Token","MATIC","18","10000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xdb0aF7137698F4F2BeF3d885F768Ec403e1Da0D2","0x083100e71f7f434800");
		});
	});
});