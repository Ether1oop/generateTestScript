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
			await _contract.connect(account0).transfer("0x4DE77474bb6e3f1717133C9116c61847b7Be2E48","0x6dae2031ef49c6380000");
		});
	});
});