const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WootradeNetwork",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WootradeNetwork");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("3000000000000000000000000000","Wootrade Network","18","WOO");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x55852947821e88044b879f1d185F4031f575c680","0xc3017c983600d48cc0");
		});
	});
});