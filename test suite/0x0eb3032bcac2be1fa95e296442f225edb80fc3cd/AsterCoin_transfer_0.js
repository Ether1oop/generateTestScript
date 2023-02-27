const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AsterCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AsterCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3F2e183Df2f414Bf9657a67B5784e91ADB02c07b","0x3ea831561a243c850000");
		});
	});
});