const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Comp",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Comp");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1449e0687810BdDD356ae6Dd87789244A46d9AdB");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});