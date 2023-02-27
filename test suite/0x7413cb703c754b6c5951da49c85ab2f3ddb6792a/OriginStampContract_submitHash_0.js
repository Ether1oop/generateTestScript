const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OriginStampContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OriginStampContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("submitHash",function(){
		it("testing submitHash",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).submitHash("0x8d8ff2c39dad4133d31093cd9c2ccc63b0e4d39fb391ce49f50587d11bf36ca3");
		});
	});
});