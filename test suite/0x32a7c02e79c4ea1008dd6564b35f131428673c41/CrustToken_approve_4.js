const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CrustToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CrustToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xe66B31678d6C16E9ebf358268a790B763C133750","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});