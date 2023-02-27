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
			await _contract.connect(account0).register("0x0205d50d2e53b3e115c9bb392a5143205b4ef20ba085979ad48b397969f58e9184");
		});
	});
});