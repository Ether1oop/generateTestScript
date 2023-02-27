const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("VIDT",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("VIDT");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x26Dc4a7131567DE332d1Bbf6a8F895f7C67Db62f","0x073385ee133124fc0000");
		});
	});
});