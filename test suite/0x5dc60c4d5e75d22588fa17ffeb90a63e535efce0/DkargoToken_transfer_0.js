const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DkargoToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DkargoToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("dKargo","DKA","5000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x5775C0600048116159114597CF3676BDab000bC6","0x0399e5a8d259b4f80000");
		});
	});
});