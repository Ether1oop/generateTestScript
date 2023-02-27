const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YFI",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YFI");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xC26b89A667578ec7b3f11b2F98d6Fd15C07C54ba","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});