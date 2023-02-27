const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FEG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FEG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFF3C8C8D8c06A6a55829d23666520118ea80F4c1","0x044536e0306031fbf0");
		});
	});
});