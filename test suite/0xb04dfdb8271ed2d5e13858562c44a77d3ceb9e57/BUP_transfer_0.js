const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BUP",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BUP");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6381AaE465d6A84d58d558623Ee6FF8eD392cff3","0x2caac574f02e6eb60000");
		});
	});
});