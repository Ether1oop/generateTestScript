const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ConvexToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ConvexToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x989AEb4d175e16225E39E87d0D97A3360524AD80");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x55B916Ce078eA594c10a874ba67eCc3d62e29822","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});