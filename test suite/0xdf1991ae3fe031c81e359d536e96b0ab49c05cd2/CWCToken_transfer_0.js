const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CWCToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CWCToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x681Dc57d29B6CF47783b6DaaA21E0B3D45d4571c","0x0cb49b44ba602d800000");
		});
	});
});