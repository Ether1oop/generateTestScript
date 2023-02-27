const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LifeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LifeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xf946Faab5aef7b40BA846C0BC6f81a19027a275E","0x0a12ea4f3a9da44b0000");
		});
	});
});