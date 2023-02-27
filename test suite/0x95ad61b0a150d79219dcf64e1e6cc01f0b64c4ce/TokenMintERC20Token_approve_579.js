const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenMintERC20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenMintERC20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("SHIBA INU","SHIB","18","1000000000000000000000000000000000","0x6603cb70464ca51481d4edBb3B927F66F53F4f42","0xB8f226dDb7bC672E27dffB67e4adAbFa8c0dFA08");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254fb6c44bAC0beD2854e76F90643097d","0x20c1a04d307ff54e000000");
		});
	});
});