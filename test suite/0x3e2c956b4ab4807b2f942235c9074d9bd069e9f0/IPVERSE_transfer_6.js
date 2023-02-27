const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("IPVERSE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("IPVERSE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("IPVERSE","IPV");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x321D64cd913a257F21cbE9157c3efE79D2A668c3","0x6342fd08f00f6378000000");
		});
	});
});