const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("POLA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("POLA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5904FE141d3e801ea09e7c6f660c66C604c3060c","0x0c4513fca039f6db5c88");
		});
	});
});