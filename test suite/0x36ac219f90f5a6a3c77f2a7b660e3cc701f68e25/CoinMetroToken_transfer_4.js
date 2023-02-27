const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinMetroToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinMetroToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xc45CC4e163A7947EF302f7a55Bc998cdA638D937","0x0cd47eb921f3901a7e");
		});
	});
});