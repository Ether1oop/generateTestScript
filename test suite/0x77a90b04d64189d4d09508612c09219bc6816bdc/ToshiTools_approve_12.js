const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ToshiTools",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ToshiTools");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x209FDA1C49e5257424a13B2D5Df28c7A3601379D","0xA027c7c415fE2a2393c1e1277F6d3F79c9Ea1AB1","0xA027c7c415fE2a2393c1e1277F6d3F79c9Ea1AB1");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254fb6c44bAC0beD2854e76F90643097d","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});