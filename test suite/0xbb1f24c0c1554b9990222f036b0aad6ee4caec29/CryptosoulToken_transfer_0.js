const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CryptosoulToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CryptosoulToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0D034B9d1c76ab0ee372786093Df84E60170768D","0x02b5e3af16b1880000");
		});
	});
});