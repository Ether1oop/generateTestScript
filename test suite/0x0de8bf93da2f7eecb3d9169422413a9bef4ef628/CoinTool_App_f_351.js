const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x0191","0x0192","0x0193","0x0194","0x0195","0x0196","0x0197","0x0198","0x0199","0x019a","0x019b","0x019c","0x019d","0x019e","0x019f","0x01a0","0x01a1","0x01a2","0x01a3","0x01a4","0x01a5","0x01a6","0x01a7","0x01a8","0x01a9","0x01aa","0x01ab","0x01ac","0x01ad","0x01ae","0x01af","0x01b0","0x01b1","0x01b2","0x01b3","0x01b4","0x01b5","0x01b6","0x01b7","0x01b8","0x01b9","0x01ba","0x01bb","0x01bc","0x01bd","0x01be","0x01bf","0x01c0","0x01c1","0x01c2","0x01c3","0x01c4","0x01c5","0x01c6","0x01c7","0x01c8","0x01c9","0x01ca","0x01cb","0x01cc","0x01cd","0x01ce","0x01cf","0x01d0","0x01d1","0x01d2","0x01d3","0x01d4","0x01d5","0x01d6","0x01d7","0x01d8","0x01d9","0x01da","0x01db","0x01dc","0x01dd","0x01de","0x01df","0x01e0","0x01e1","0x01e2","0x01e3","0x01e4","0x01e5","0x01e6","0x01e7","0x01e8","0x01e9","0x01ea","0x01eb","0x01ec","0x01ed","0x01ee","0x01ef","0x01f0","0x01f1","0x01f2","0x01f3","0x01f4"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000003100000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});