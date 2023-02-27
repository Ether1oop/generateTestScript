const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KryptoriaLand",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KryptoriaLand");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x55BF8ba0eCa5E367f86Db3deF773AED95E9eE861","ipfs://Qmc4TWPXGaTXj4Hp8J7Q9MPDf8aNy1M1m4obA2eywnPuxj","10000","0x63d85ec7B1561818Ec03E158ec125a4113038A00");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xeFc70A1B18C432bdc64b596838B4D138f6bC6cad",1);
		});
	});
});