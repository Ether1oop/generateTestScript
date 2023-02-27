const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ShiryoInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ShiryoInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x368e895bf90Bd8bB46F1D4f4818D46A76E187C72","0x0386992ac084ede80000");
		});
	});
});