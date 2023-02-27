const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ESG",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ESG");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1772C72F50ED1740F7336bf3bb4bB990105FBE0D");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x752Faf8B40BE0D2F80A5450D803a486EfC81574F","0x204fce5e3e25026110000000");
		});
	});
});