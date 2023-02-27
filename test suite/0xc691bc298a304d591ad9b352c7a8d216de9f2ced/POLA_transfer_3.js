const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("POLA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("POLA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFCC283C9649C36a4a68e8F9c420EaC24EF758fE4","0x032aa8705a4ff7680000");
		});
	});
});