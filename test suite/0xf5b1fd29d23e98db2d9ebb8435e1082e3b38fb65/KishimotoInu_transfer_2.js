const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KishimotoInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KishimotoInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x36DE06b04240439be1Eb7Dbc7377E317c68e28a6","0x174876e800");
		});
	});
});