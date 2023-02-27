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
			await _contract.connect(account0).transfer("0x6cC5F688a315f3dC28A7781717a9A798a59fDA7b","0x25ec4ebe2d55f10b2000");
		});
	});
});