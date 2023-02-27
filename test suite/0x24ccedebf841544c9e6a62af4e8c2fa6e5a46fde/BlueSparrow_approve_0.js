const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("BlueSparrow",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("BlueSparrow");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xA6f368fC6f4F3f7Bbe224B392c50abC1D585f083","0x1f054A5E9ac34ABD49a3c02078dfF1Eb9CcB83Cf");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x1111111254EEB25477B68fb85Ed929f73A960582","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});