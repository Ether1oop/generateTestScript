const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CellToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CellToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Cellframe Token","CELL","30300000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf078C4cA4FB0c6D9Ca395354F2940bdF4B927625","0x0de4246af03f98d54000");
		});
	});
});