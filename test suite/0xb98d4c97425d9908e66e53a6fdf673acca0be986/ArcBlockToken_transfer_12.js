const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ArcBlockToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ArcBlockToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x754B3DCacF5aACf769755e1e5F6394d62fFad664","0x08ad215387c1696e0000");
		});
	});
});