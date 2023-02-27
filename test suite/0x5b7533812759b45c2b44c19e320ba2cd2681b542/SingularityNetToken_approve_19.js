const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SingularityNetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SingularityNetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("SingularityNET Token","AGIX");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x13e1367A455C45Aa736D7Ff2C5656bA2bD05AD46","0x1b870545dec0");
		});
	});
});