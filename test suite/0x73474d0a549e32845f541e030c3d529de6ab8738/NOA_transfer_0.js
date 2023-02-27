const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NOA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NOA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF41D0059B8D0216483DB0297f624fcA17bB0063C","0x7db9d2087a3ed6588800");
		});
	});
});