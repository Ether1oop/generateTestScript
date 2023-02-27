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
			await _contract.connect(account0).setApprovalForAll("0xE6F45376f64e1F568BD1404C155e5fFD2F80F7AD",1);
		});
	});
});