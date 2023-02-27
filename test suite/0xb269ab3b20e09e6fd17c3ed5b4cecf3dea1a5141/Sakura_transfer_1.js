const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Sakura",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Sakura");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xDCC0e057f213839718A2e38780a3b33F832515d3","0x8b6bffa6c8580c56d7");
		});
	});
});