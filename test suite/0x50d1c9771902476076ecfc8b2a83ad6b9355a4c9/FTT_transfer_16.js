const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FTT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FTT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6748F50f686bfbcA6Fe8ad62b22228b87F31ff2b","0x011f40b25d062b4000");
		});
	});
});