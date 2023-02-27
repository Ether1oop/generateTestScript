const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BPTCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BPTCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x8Ce2Bfa25CC64616fcAcb96F64F51B8def187ad2","0x62530a9f00");
		});
	});
});