const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AllSportsX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AllSportsX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x554B5B3b581eA03B3C5BD44127F81e2c199dB156","0x01447b20d9607ce3ea8000");
		});
	});
});