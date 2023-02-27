const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GenArt721Core",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GenArt721Core");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Art Blocks","BLOCKS","0x198783d196A1728AEF847a054D7622e78F47cd52");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0xFDda20a20cb4249e73e3356f468DdfdfB61483F6",1);
		});
	});
});