const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CSR",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CSR");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x61459D345779B9d8Ceaf2b1472a60805Cb699aaE","0x0d2106d815ebeac00000");
		});
	});
});