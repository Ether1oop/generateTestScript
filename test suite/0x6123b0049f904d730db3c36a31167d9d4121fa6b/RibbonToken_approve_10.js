const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RibbonToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RibbonToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Ribbon","RBN","1000000000000000000000000000","0xDAEada3d210D2f45874724BeEa03C7d4BBD41674");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xad84693a21E0a1dB73ae6c6e5aceb041A6C8B6b3","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});