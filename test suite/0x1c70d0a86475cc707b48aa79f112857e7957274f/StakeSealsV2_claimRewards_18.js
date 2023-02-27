const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("StakeSealsV2",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("StakeSealsV2");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xc524c8678bd18b62A4F2aA3Cd981cD2b9a621641","0x5948b660f0e4236bBAE7a532bf6BCD8f2a7d0bD9","0xA4506e04F1777E30dC85e2D6942F062d08CF2aed",["50","60","75","100","150","500","0"]);
		return {_contract,account0,account1,account2};
	}

	describe("claimRewards",function(){
		it("testing claimRewards",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).claimRewards(["0x0e1c","0x0e1d","0x0e1e","0x167d","0x167e","0x167f","0x1680","0x1681","0x1682"]);
		});
	});
});