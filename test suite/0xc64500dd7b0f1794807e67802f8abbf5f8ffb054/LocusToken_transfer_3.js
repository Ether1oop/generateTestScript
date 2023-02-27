const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LocusToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LocusToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xc4567c98567e3F957914c8B6391F75bFFd901115","0x1603ea37a9a3200c0000");
		});
	});
});