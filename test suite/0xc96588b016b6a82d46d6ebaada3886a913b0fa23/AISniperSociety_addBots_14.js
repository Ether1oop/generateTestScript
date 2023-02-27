const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AISniperSociety",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AISniperSociety");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("addBots",function(){
		it("testing addBots",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).addBots(["81c545534Ea953362930F433735aAB5893C20F06","3a549e5540Ce0027f156B05722c12A7AD0E8B335","6b749478f61bbdABb87efbb4C54EAdEaa76FDb34"]);
		});
	});
});