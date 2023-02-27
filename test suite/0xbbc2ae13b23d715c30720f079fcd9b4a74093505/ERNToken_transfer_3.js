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

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x28C6c06298d514Db089934071355E5743bf21d60","0x014a23ba4dcc10e80000");
		});
	});
});