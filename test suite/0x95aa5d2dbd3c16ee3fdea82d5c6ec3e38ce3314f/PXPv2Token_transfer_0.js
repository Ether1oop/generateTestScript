const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PXPv2Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PXPv2Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6EC673AfC8fEAe4FA5899b4A0DfD52E07D648FEE","0x12b0d6029952755800");
		});
	});
});