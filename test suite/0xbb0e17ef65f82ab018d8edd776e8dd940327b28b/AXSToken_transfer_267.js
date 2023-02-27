const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AXSToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AXSToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1A2a1c938CE3eC39b6D47113c7955bAa9DD454F2");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x31615578b3d4185fe3b7F4AE098f0cdef87f683b","0x015af1d78b58c40000");
		});
	});
});