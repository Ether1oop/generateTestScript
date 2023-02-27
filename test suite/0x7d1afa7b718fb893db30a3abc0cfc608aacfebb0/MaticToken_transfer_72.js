const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MaticToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MaticToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Matic Token","MATIC","18","10000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xa26e73C8E9507D50bF808B7A2CA9D5dE4fcC4A04","0x06bc58ac70d8170000");
		});
	});
});