const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CelerToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CelerToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3969c06fdF7c6185dCA68aA033Bbd8EB88801423","0x02ffd4727fe99ffb9800");
		});
	});
});