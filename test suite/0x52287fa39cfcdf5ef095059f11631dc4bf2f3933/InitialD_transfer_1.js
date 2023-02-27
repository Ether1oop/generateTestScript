const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("InitialD",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("InitialD");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x727D60AD2A33E563100e93A2F99FFE35526A1BF2","0x0f4240");
		});
	});
});