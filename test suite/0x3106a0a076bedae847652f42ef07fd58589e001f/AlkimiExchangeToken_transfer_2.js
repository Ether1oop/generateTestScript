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
			await _contract.connect(account0).transfer("0x42dC36CEb2d45D156cF5d082B23BD5bB5A86c430","0x3b3fe7e3d5bc4f0000");
		});
	});
});