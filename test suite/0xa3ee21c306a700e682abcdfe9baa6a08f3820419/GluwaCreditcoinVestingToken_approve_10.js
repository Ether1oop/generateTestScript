const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GluwaCreditcoinVestingToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GluwaCreditcoinVestingToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x16D43E797D14D626a90060Ac7Cf9B451F77eC1E8","0x2c21B180014B5Fb261a2253962a2CA9ebd33bF8e");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xF35F8853522ac21e6134c7691CC5f3C9ab6b6b62","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});