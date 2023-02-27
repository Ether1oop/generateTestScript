const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERNToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERNToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("@EthernityChain $ERN Token","ERN");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xa473Bfbe93e07c8EaBF00Aa69A3A99F812F461a7","0x04140c78940f6a24fdffc78873d4490d2100000000000000");
		});
	});
});