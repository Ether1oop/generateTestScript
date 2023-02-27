const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TransferRegistry",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TransferRegistry");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xEC576eB718eB62cCeE30736b8FC2624655a07488","0x2d9f6bd6");
		});
	});
});