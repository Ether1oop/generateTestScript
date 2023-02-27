const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("DeflationToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("DeflationToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x75A9F9d4fF67cbF0Bde69f7f49D8bc511272f19b","0x030513d33a7306d12c0000");
		});
	});
});