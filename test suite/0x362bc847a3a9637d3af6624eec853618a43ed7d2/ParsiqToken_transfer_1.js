const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ParsiqToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ParsiqToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3E2b3F1Ac53Bb61dB2Aed7a604A1062E6D6fFF12","0x050b6e168137826dfb38");
		});
	});
});