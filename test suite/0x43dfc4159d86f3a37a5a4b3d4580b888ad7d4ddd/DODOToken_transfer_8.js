const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DODOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DODOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x56D22b4F758fD142c6d3B45dd3d1c027a0Ac4049","0x02b60fbbc1d38d914000");
		});
	});
});