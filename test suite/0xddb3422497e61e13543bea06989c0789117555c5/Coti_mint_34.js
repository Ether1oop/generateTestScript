const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Coti",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Coti");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0xB0e355920Ce327Ce8b5e303d78Ad320f9873423c","0x021ad79436e06df80e00");
		});
	});
});