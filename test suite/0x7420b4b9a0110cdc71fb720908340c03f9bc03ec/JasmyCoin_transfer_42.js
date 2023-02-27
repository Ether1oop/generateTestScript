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
			await _contract.connect(account0).transfer("0x418Fe1B6C91dd65940b0aba8C204253AD0c08504","0x133a4b95128ac48e8c00");
		});
	});
});