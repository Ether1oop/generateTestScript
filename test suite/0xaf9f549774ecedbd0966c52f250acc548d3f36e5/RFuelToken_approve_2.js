const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RFuelToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RFuelToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Rio Fuel Token","RFuel","18","1000000000");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xE8F063c4dC60B2F6c2C900d870ddcDae7DaAb7F6","0x00");
		});
	});
});