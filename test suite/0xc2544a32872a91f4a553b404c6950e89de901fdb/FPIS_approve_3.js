const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("FPIS",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("FPIS");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x234D953a9404Bf9DbC3b526271d440cD2870bCd2","0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA","0x76c8ceF5B18994a85bC2bE1991E5B9C716626767");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xDef1C0ded9bec7F1a1670819833240f027b25EfF","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});