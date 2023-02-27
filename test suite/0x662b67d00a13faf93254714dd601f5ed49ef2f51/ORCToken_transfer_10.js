const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ORCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ORCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","Orbit Chain","ORC");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xB4669B10D923c2d141F2ECCF382bBE06CeEdF82B","0xf79237151774927400");
		});
	});
});