const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KOKContract",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KOKContract");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xF22e86bEef0277Ea3D64081DAe6092B997B3b849","0x086976cb431bc7580000");
		});
	});
});