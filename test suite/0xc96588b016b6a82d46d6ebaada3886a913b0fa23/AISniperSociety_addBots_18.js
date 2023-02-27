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
			await _contract.connect(account0).addBots(["e5c5F0fD0751f2b7Cb61b268c458c855Ba924B91","0328B2c5498E3EaB757dE51Bf77dd772E67cACb6","2C2c11363bEd50b3A939Ec49Cfe2b39172665527","828BE67190268C1145De4f790b072B87CeFC60ed","F6E7bdb6bf1C3DEf6eD4cC76B7ebc258FB0BA98a"]);
		});
	});
});