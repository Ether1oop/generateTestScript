const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC677Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC677Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xC6e16B021c3280D6D4e1d50FBba3b69FC23166Cc","0x0d3979b9f46bcfec0000");
		});
	});
});