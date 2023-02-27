const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HuntToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HuntToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("increaseAllowance",function(){
		it("testing increaseAllowance",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).increaseAllowance("0xb09A1410cF4C49F92482F5cd2CbF19b638907193","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});