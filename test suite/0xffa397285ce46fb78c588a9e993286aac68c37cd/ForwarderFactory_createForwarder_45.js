const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ForwarderFactory",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ForwarderFactory");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x059FFAFdC6eF594230dE44F824E2bD0A51CA5dED");
		return {_contract,account0,account1,account2};
	}

	describe("createForwarder",function(){
		it("testing createForwarder",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).createForwarder("0x1522900B6daFac587d499a862861C0869Be6E428","0x000000000000000000000000000000000000000000000000000000000005954a");
		});
	});
});