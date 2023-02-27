const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MediaLicensingToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MediaLicensingToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x859c13A3Cd75E2ACdcfBfF6CA2E20aCEbea16c24","0x01395fb042d8e9fe2000");
		});
	});
});