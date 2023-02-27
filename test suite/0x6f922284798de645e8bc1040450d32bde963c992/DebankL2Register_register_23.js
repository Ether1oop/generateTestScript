const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DebankL2Register",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DebankL2Register");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("register",function(){
		it("testing register",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).register("0x02020960e5f3be164fc9ccd0253bf3b94b6e36d28d39d136b226ab2743e91bf6b7");
		});
	});
});