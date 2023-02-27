const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OpenProprietaryProtocol",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OpenProprietaryProtocol");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xb266240bC1E0A3ceDc5A62d2a182d84a1876236C","0x02b0d4e2e704a00e0000");
		});
	});
});