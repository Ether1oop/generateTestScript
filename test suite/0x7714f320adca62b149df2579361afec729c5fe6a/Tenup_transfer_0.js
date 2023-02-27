const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Tenup",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Tenup");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xaE14ce73c7e686152af65D0eD4C23fB05D0C97E0","0x02e431f7d96500a60000");
		});
	});
});