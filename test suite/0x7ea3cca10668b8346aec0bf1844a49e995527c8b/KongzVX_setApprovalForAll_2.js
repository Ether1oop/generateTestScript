const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KongzVX",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KongzVX");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xE2311ae37502105b442bBef831E9b53c5d2e9B3b","CyberKongz VX","KONGZ VX",[],[]);
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",1);
		});
	});
});