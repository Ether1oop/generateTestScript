const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CryptoHobosPetPartners",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CryptoHobosPetPartners");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("https://cryptohobos.io/tokens/pets/","0xd153f0014db6d1F339c6340d2C9F59214355D9d7");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",1);
		});
	});
});