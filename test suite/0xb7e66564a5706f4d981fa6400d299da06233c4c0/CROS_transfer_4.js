const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CROS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CROS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xFE8478Da3546CCb4ebF9278B08DcE788d1Ed0A49","0x0878678326eac9000000");
		});
	});
});