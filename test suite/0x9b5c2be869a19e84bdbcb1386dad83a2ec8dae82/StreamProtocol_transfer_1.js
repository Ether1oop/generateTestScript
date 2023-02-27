const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("StreamProtocol",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("StreamProtocol");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xaFd537C71d23d898a4fd399Bc11Fe479C863FA9D","0x103db1564ad4887f6000");
		});
	});
});