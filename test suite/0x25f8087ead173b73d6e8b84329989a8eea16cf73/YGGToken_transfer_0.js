const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("YGGToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("YGGToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4765D4A690c39C7Aa2505f1215d38D2accCA8Ae4","0x0110651bb177f6d00000");
		});
	});
});