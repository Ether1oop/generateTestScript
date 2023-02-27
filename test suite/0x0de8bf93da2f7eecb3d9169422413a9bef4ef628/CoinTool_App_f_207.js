const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x01c8","0x01c9","0x01ca","0x01cb","0x01cc","0x01cd","0x01ce","0x01cf","0x01d0","0x01d1","0x01d2","0x01d3","0x01d4","0x01d5","0x01d6","0x01d7","0x01d8","0x01d9","0x01da","0x01db","0x01dc","0x01dd","0x01de"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000441c5603050000000000000000000000006f809d05fdc1afb09c8ea039bc0d40267e2be93a000000000000000000000000000000000000000000000000000000000000006400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});