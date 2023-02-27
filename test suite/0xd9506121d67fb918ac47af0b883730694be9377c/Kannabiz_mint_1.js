const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Kannabiz",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Kannabiz");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x661246ce0eb6b9036aa629e5ecbcb7eb9ae81e3ec5fc62a1a38cf30b84fa084e","0x00000026bec64506dce874f0079ae39f319f41e86576e1d853c100835f32ba59");
		});
	});
});