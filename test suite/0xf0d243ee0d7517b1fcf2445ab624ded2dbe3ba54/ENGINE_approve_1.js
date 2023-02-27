const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ENGINE",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ENGINE");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x78F2deD4Ae397795F7411A14269528346907ce5a","0x79b772f0F4728EFc2169637D529F285b033b8123","0x38Cb38c6fE39791Ace6Fd2B5f5735c602eFf5eA3");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});