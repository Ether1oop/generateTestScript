const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XEDToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XEDToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xd582A0740F39ABDA6aA3d28Bf1ae343253FF3352","0xA58DdEcbc9ad958cAF2Aa8A2236D9AbAE74652A5","0x74194E77d1cB4B07e0D49FaDdf413930Cdf40973","0xc55De2477B67080478de57e9133080F194119592","0x698dEf85217FDF0797E3f6179EA3E31c8bcd54F9");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254fb6c44bAC0beD2854e76F90643097d","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});