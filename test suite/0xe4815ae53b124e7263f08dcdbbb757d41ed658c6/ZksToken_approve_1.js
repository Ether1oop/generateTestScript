const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ZksToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ZksToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x8ECa806Aecc86CE90Da803b080Ca4E3A9b8097ad","0x00");
		});
	});
});