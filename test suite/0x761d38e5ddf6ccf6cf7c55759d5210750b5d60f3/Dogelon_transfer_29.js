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
			await _contract.connect(account0).transfer("0x8e2727E4fCE7496bba4743Ce7bB5fD275f5bf565","0x1486c372ec26d1bad24a2c00");
		});
	});
});