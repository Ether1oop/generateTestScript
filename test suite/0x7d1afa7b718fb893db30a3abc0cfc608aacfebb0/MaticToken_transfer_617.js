const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MaticToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MaticToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Matic Token","MATIC","18","10000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x6eDd1072B91E6fe2c744575d4E2F7c8f77e37dbA","0x0f948611e528c708");
		});
	});
});