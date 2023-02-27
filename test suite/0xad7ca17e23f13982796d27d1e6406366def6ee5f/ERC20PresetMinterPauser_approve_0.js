const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ERC20PresetMinterPauser",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ERC20PresetMinterPauser");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("HEGICTokenIOU Phase II","rHEGIC2");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xAF3bFb50469aeCDA211db3333B8c0dA263B0cce4","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});