const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AstroElon",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AstroElon");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x42Ef20824B5EcB0A426A3E48A5061243bA4419a1","0x405831c9ddc89ebe");
		});
	});
});