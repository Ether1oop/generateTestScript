const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WadzPayToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WadzPayToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF18177Ee38321d8a4b6547d91063E995B6d78F51","0x0a73966e015726a40000");
		});
	});
});