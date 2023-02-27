const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Hegic",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Hegic");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x98ECf0FC8394042a45e0F02587C65c01d89dbA8c","0x2211796a745f59f20000");
		});
	});
});