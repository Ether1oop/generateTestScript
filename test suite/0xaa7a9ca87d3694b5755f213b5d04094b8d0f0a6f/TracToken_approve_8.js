const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("TracToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("TracToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x20e2ab81E11d4D02fe71B8CF9E8E3c9e2F714D5E","0x20e2ab81E11d4D02fe71B8CF9E8E3c9e2F714D5E","0x20e2ab81E11d4D02fe71B8CF9E8E3c9e2F714D5E");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x9096d4B4f522DC8A17ccd391e440ac6651f2C4bF","0x0e43d0a151b9108000");
		});
	});
});