const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Uni",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Uni");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x41653c7d61609D856f29355E404F310Ec4142Cfb","0x41653c7d61609D856f29355E404F310Ec4142Cfb","1704067200");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xc3d688B66703497DAA19211EEdff47f25384cdc3","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});