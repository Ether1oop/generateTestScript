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
			await _contract.connect(account0).transfer("0x71bd57248D43836f19f4d59FE65FB3c99a996824","0xc6dc184193483740");
		});
	});
});