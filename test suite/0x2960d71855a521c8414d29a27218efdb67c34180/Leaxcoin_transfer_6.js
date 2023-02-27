const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Leaxcoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Leaxcoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9d67a6676A623914c62c55d91E5AB9eCa9Ff5C53","0x15b287c5abc2719c0000");
		});
	});
});