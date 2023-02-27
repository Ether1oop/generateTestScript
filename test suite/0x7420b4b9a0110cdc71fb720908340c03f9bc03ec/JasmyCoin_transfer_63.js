const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("JasmyCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("JasmyCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Tokyo Token","TOKYO","18","50000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x7db77E4c967C95A5a9E2ec57Ec21788daB481893","0x6ecb4f12c8e7afae0000");
		});
	});
});