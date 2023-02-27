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
			await _contract.connect(account0).commit("0x7ff621319c119dfcdd470fcccb7abca94c6e6314ee33bfd787dd92cd33531a97");
		});
	});
});