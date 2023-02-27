const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KishuInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KishuInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0ae1a7e046ddA0a076c2C617aD66a96B3e012d82","0x163fe213995436b800");
		});
	});
});