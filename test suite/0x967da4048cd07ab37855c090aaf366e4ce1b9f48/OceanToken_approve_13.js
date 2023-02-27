const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OceanToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OceanToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xbcf0eac47Aa2e3f19B81926CD634301BfE18CaAF");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xFe27534EA0c016634b2DaA97Ae3eF43fEe71EEB0","0x0531135be43039a42508");
		});
	});
});