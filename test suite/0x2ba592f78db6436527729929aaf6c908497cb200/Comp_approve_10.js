const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Comp",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Comp");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x197939c1ca20C2b506d6811d8B6CDB3394471074");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xE618C25f580684770f2578FAca31fb7aCB2F5945","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});