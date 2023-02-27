const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MXCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MXCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xcCFf4765C703E22201c7F823884c16EaB186Eb14","0x6d5d0c935b510c0000");
		});
	});
});