const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("illogics",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("illogics");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xaa77729d3466ca35ae8d28b3bbac7cc36a5031efdc430821c02bc31a238af445","2000000000000000000","0xf0d54349aDdcf704F77AE15b96510dEA15cb7952","0x514910771AF9Ca656af840dff83E8264EcF986CA");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x00000000000111AbE46ff893f3B2fdF1F759a8A8",1);
		});
	});
});