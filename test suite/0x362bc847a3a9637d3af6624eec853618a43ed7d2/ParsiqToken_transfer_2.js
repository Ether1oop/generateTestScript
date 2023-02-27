const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ParsiqToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ParsiqToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x532ad563C71505b2eecceb3d2cB4FA2175532994","0x064904faa96becf50000");
		});
	});
});