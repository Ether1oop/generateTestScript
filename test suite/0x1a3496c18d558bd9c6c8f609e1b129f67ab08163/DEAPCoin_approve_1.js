const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DEAPCoin",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DEAPCoin");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x219F650Fb33166573bc9B9628811b3c4C0c7D56b","0x0F4f0f112C1C2857fC11021eBEAA82AD6586BBCf","0x5D10D86De4071eb92FDEe172E7933d631D196E34");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254fb6c44bAC0beD2854e76F90643097d","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});