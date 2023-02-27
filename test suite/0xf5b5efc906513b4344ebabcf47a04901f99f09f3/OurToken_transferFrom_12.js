const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OurToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OurToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","LAW ERC-20 CDR (Crypto depository recipe)","ELAW");
		return {_contract,account0,account1,account2};
	}

	describe("transferFrom",function(){
		it("testing transferFrom",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferFrom("0x0Ff404f4AFF9e3b76eB9ae3f72CD73A43Ac95484","0xf16E9B0D03470827A95CDfd0Cb8a8A3b46969B91","0x014d8f8f");
		});
	});
});