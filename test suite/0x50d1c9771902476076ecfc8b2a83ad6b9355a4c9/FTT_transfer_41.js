const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FTT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FTT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x68aBEF9E0D00954fA536830CfE721e28e7290a3c","0x010e2c57469c74340000");
		});
	});
});