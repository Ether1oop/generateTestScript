const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("cvxCrvToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("cvxCrvToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xDef1C0ded9bec7F1a1670819833240f027b25EfF","0x0156eee2bb6a61180000");
		});
	});
});