const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BEP20Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BEP20Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0074589802b4D817B2a1B23cE69E40e9a0419F51","0x0a968163f0a57b400000");
		});
	});
});