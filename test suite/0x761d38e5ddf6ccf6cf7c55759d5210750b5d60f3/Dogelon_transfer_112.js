const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Dogelon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Dogelon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x457CaA386bC1C332E3A6eA077e41f9C62157F0d3","0x1e8d2a993833ff8195a40000");
		});
	});
});