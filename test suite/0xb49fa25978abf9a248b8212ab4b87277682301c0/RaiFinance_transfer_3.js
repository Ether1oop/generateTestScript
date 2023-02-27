const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RaiFinance",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RaiFinance");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x37e5c3f1786fF18cd005926e0B709539d3266ace","0x012bd7c2137841029c00");
		});
	});
});