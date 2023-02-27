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
			await _contract.connect(account0).approve("0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});