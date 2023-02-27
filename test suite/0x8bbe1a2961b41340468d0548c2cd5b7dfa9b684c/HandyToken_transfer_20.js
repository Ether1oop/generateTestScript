const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HandyToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HandyToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x146EcAa182f4A0EC4D7b7CA55932cE30D1a299e3","0x0a9b62642bce54680000");
		});
	});
});