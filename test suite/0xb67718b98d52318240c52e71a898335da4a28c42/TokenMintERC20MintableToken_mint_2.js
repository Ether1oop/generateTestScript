const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TokenMintERC20MintableToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TokenMintERC20MintableToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("ZEEP Token","ZEEP","18","18999999999000000000000000000","0x6603cb70464ca51481d4edBb3B927F66F53F4f42","0xEaF76671605A50bedcb79f223DFC5339c14a73ff");
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0xA176Daa12d6F1ff37bd83f9C4eE5F3705000442a","0xb1a2bc2ec50000");
		});
	});
});