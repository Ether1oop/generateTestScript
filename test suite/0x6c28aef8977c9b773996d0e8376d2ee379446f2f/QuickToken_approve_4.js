const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("QuickToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("QuickToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x476307DaC3FD170166e007FCaA14F0A129721463","0x476307DaC3FD170166e007FCaA14F0A129721463","1727740800");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x40aA958dd87FC8305b97f2BA922CDdCa374bcD7f","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});