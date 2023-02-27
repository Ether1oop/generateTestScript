const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OurToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OurToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","LAW ERC-20 CDR (Crypto depository recipe)","ELAW");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x169CBdbA6597Cac5D41A28E78764b0c9f7B983B6","0x12cced60");
		});
	});
});