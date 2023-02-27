const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RankerDAOToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RankerDAOToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3e148a15ba1d00024E7D8afe1a3D6c76ee915102","0x859f2d0d11ed510000");
		});
	});
});