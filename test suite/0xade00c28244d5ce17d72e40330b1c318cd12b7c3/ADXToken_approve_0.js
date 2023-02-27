const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ADXToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ADXToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x04918f1071594aF602F937F6a444B5F5787786ed","0x4470BB87d77b963A013DB939BE332f927f2b992e");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});