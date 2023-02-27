const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("HokkaiduInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("HokkaiduInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x9be7abeb5F50759cDb123fD4eff9f9a4ee49e924","0x01f980be04f9b6a3e3");
		});
	});
});