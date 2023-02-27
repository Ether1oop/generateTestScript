const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MainframeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MainframeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549","0x1e911a907ef6c19153fc00");
		});
	});
});