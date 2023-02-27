const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KOKContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KOKContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x4Fcc3C00BD901B93c6db16e95969E1D452b2A0f6","0x011d486a32d14ca84000");
		});
	});
});