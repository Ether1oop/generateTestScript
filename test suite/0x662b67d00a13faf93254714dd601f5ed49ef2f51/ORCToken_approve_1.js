const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ORCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ORCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","Orbit Chain","ORC");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x6bA287890264cFdAb98100E9855b1423328269D2","0x0318068f5dc9b78fbba468e8");
		});
	});
});