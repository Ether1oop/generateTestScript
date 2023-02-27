const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("POLA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("POLA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x123bC014D05509959E2bd78500c6EcD888874854","0x02c30f358f8560800000");
		});
	});
});