const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Unifty",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Unifty");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6CCEE3bC5Db21d67d9A12ccfE5d3bA5F4e0eD7aB","0x0371fa243b9a259400");
		});
	});
});