const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("EHIVE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("EHIVE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xBE6FEe3756f7BE3A0cD492059341cb5b77dD81F9","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});