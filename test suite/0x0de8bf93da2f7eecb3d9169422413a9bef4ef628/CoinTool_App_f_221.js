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
			await _contract.connect(account0).f(["0x0592","0x0593","0x0594","0x0595","0x0596","0x0597","0x0598","0x0599","0x059a","0x059b","0x059c","0x059d","0x059e","0x059f","0x05a0","0x05a1","0x05a2","0x05a3","0x05a4","0x05a5","0x05a6","0x05a7","0x05a8","0x05a9","0x05aa","0x05ab","0x05ac","0x05ad","0x05ae","0x05af","0x05b0","0x05b1","0x05b2","0x05b3","0x05b4","0x05b5","0x05b6","0x05b7","0x05b8","0x05b9","0x05ba","0x05bb","0x05bc","0x05bd","0x05be","0x05bf","0x05c0","0x05c1","0x05c2","0x05c3","0x05c4","0x05c5","0x05c6","0x05c7","0x05c8","0x05c9","0x05ca","0x05cb","0x05cc","0x05cd","0x05ce","0x05cf","0x05d0","0x05d1","0x05d2","0x05d3","0x05d4","0x05d5","0x05d6","0x05d7","0x05d8","0x05d9","0x05da","0x05db","0x05dc","0x05dd","0x05de","0x05df","0x05e0","0x05e1","0x05e2","0x05e3","0x05e4","0x05e5","0x05e6","0x05e7","0x05e8","0x05e9","0x05ea","0x05eb","0x05ec","0x05ed","0x05ee","0x05ef","0x05f0","0x05f1","0x05f2","0x05f3","0x05f4","0x05f5"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000003400000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});