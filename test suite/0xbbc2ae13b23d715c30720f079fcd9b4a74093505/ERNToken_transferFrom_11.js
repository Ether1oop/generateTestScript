const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERNToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERNToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("@EthernityChain $ERN Token","ERN");
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0x135DEA59116AbBAf8E176f34033b2f2eA12498Ce","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x01b01cd88773568000");
		});
	});
});