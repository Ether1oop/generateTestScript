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
			await _contract.connect(account0).register("0x0305405a08df40556bb3bfe0b529da30ed5f7148dceaf5b396f7036268a282aca1");
		});
	});
});