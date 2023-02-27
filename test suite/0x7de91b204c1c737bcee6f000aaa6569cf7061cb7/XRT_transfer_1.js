const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("XRT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("XRT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("10000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x589BE9CcB62E7148413E3Df4f3D6a1cE6954cf17","0x810f0f95a2");
		});
	});
});