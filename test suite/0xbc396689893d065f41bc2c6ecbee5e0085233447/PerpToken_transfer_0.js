const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PerpToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PerpToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("150000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xa812887298c94e1CFC63A40eBaE5f1c6E4EDec12","0x0196a08c4ce16f070000");
		});
	});
});