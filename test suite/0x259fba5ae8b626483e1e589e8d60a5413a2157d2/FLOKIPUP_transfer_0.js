const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FLOKIPUP",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FLOKIPUP");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x46a423F4Ebd1649Ef400473eF63b283E115CA5f9","0x06caeebbee94bf22");
		});
	});
});