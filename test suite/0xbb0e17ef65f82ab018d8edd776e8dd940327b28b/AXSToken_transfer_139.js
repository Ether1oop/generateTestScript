const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AXSToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AXSToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1A2a1c938CE3eC39b6D47113c7955bAa9DD454F2");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x167A9333BF582556f35Bd4d16A7E80E191aa6476","0x032cde7fc0e0402c00");
		});
	});
});