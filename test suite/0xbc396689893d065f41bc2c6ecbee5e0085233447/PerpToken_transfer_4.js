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
			await _contract.connect(account0).transfer("0x5C1622f9d9FE5b5ee8Ee8899BC4f74b756C3ca05","0x041f7a09a7c0b21a046b");
		});
	});
});