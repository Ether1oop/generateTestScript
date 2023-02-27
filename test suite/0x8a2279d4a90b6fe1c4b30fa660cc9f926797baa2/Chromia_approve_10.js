const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Chromia",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Chromia");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x8708E8756f1202Bc1760098CFc1C1bfa8306CA0d","0");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xb45A2DDA996C32E93B8c47098E90Ed0E7ab18E39","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});