const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Coti",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Coti");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x65067a383C02533fa00Ff25131045191EEe00b91","0x021ad65e84984785dd00");
		});
	});
});