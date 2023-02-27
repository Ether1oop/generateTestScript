const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("MyAdvancedToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("MyAdvancedToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("12000000000","Cubechain","QUBT");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xC7F27Fdc99b4E8b4aE135d37E14B74Fb77A10873","0x83a4dbacdbf0");
		});
	});
});