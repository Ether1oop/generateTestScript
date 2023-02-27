const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KishimotoInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KishimotoInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xe204807A5Ab1e7932902e4da441b377E631f935F","0x01014265a20b7f825a4b");
		});
	});
});