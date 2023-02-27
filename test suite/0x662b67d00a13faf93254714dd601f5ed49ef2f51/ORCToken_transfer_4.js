const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ORCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ORCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000","Orbit Chain","ORC");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x1Bb9F974b333726D218932eCad5b6123d4B7EBA3","0x0170adb07d19f410d000");
		});
	});
});