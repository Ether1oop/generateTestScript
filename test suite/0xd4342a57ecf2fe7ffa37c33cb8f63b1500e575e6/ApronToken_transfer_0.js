const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ApronToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ApronToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x785119243FB83412B8Fd94c9962e058165AFF34a","0x176b3f6569d77ae6b800");
		});
	});
});