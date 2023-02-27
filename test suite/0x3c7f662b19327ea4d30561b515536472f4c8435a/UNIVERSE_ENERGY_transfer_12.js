const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UNIVERSE_ENERGY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UNIVERSE_ENERGY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5826C9d949C3A08Eed2d92c60e7865Cb50510725","0x0277228ad6437400");
		});
	});
});