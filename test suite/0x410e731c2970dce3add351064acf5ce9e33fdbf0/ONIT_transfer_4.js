const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ONIT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ONIT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xe0901B9cd225F4e6B00866C786df8886b463a154","0x02e8d09b77715f554c00");
		});
	});
});