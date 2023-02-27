const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("UbexToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("UbexToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("4000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0B298497F7504d5Caa43C4e7bBF2eAB6f97A3fdA","0x061653338209f14b729000");
		});
	});
});