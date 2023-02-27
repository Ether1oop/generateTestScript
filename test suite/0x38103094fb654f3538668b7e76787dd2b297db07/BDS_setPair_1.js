const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BDS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BDS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("setPair",function(){
		it("testing setPair",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setPair("0x37eaa45dd0454ee0Db31D8be4ef393378dD9D982");
		});
	});
});