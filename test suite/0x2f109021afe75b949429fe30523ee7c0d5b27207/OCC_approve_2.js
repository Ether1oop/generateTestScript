const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OCC",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OCC");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("100000000000000000000000000","0x865d9eb17D84167745A4931F9b254B0764fDd0f6");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});