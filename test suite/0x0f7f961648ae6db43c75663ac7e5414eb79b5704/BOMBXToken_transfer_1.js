const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BOMBXToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BOMBXToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1280cfEa89a214B490C202fA22688813DF8d8c04","0x02f967a2456be6a9aab7");
		});
	});
});