const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("NBU",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("NBU");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x3A064521374bcc72D06bbb097d0De2fb2ea9A91B","0x0a968163f0a57b400000");
		});
	});
});