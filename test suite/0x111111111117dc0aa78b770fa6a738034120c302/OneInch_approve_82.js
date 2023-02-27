const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OneInch",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OneInch");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x5E89f8d81C74E311458277EA1Be3d3247c7cd7D1");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x812b40c2cA7fAbBAc756475593fC8B1c313434FA","0x00");
		});
	});
});