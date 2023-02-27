const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BlockvToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BlockvToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x6CFA1A9CB5C94087f418B3cA45338e5Fd9c511B9");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xE1A345233dFd10b3f8DAA6AA5cFD243C984c0b60","0x0baede609375d2c2e000");
		});
	});
});