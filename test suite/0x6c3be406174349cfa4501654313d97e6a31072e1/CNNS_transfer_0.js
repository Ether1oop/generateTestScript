const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CNNS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CNNS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("10000000000","Crypto Neo-value Neural System","CNNS");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0D0707963952f2fBA59dD06f2b425ace40b492Fe","0x15fc3735289e57bacd8000");
		});
	});
});