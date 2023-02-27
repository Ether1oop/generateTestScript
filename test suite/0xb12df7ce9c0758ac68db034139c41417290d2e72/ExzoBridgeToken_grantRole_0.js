const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ExzoBridgeToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ExzoBridgeToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Wrapped EXZO","WXZO");
		return {_contract,account0,account1,account2};
	}

	describe("grantRole",function(){
		it("testing grantRole",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).grantRole("0x4d494e5445525f524f4c45000000000000000000000000000000000000000000","0x42b16124ee5d8dF33fcFba161f0daCa289e4ef97");
		});
	});
});