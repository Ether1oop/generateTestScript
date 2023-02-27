const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RACAV2Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RACAV2Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xabF602F963d3cC17F0CDaE8D0ABc2940B0CFdF7C","0x3e09e2288ad98c8de80000");
		});
	});
});