const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MrMr",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MrMr");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Mirror DAO","Mirror DAO","1000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x19cb438ce920D266E68fDABe1bdCEaecaFC534cf","0x04767a24768dd25a89a7");
		});
	});
});