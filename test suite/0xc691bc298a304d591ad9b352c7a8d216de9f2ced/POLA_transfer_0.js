const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("POLA",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("POLA");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xe2e54270813c5C44A6f97d123120952a12B00000","0x0c40173b3dfdd1527000");
		});
	});
});