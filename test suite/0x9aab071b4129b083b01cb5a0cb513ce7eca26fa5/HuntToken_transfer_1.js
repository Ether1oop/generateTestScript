const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HuntToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HuntToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5Ee112B84E05fF029A375Ec4D01811b44b7D2EF5","0x3640e3d988caf00000");
		});
	});
});