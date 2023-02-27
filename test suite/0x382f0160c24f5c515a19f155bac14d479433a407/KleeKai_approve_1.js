const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KleeKai",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KleeKai");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xA67E9F021B9d208F7e3365B2A155E3C55B27de71","0x00");
		});
	});
});