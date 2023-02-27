const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AlkimiExchangeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AlkimiExchangeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xA3a431dB5B9C120e10d5b10Df52d8A2550879Fe2","0xf8fa61f3deb2d04000");
		});
	});
});