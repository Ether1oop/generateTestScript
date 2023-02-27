const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Anarchy",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Anarchy");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5C6DA8C266013A51e1870cB427360E8048217111","0x5af3107a4000");
		});
	});
});