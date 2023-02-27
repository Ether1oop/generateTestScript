const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XOLOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XOLOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xAdE0510C33B7422073AB60718Df20469Ed12d8C7","0x03e09de2596099e2b0000000");
		});
	});
});