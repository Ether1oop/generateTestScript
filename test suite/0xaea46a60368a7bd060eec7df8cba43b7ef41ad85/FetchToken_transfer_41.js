const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FetchToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FetchToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Fetch","FET","1152997575000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9EABEb12A06500c40bf3a2789393c2B508152dfA","0x903f1ee7dc0346b800");
		});
	});
});