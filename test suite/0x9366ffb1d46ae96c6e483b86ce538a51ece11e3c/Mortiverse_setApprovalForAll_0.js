const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Mortiverse",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Mortiverse");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xd4746f083DF2D2e06734466D863E170881897E71","0x98A3fbA3036C9ed0Ad4b28EacD9d939D7e3e1366","555","0x438c25354B3fEa87aBA46875CbA259Eae7b455DB");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});