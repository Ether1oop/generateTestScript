const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETHRegistrarController",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETHRegistrarController");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x57f1887a8BF19b14fC0dF6Fd9B2acc9Af147eA85","0xB9d374d0fE3D8341155663FaE31b7BeAe0aE233A","60","86400");
		return {_contract,account0,account1,account2};
	}

	describe("commit",function(){
		it("testing commit",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).commit("0x6d49dbf7b69a26a9dbefab3142b7626ed33e25bc051bb22ad14376fc3d2487bd");
		});
	});
});