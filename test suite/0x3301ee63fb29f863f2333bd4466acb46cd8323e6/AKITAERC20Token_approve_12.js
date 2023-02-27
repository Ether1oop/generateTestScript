const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AKITAERC20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AKITAERC20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Akita Inu","AKITA","18","100000000000000000000000000000000","0x3d5bd63Ee3008F446FaFEA0092fFE6aFE6D548eB","0x3d5bd63Ee3008F446FaFEA0092fFE6aFE6D548eB");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});