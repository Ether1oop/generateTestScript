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
			await _contract.connect(account0).f(["0x0375","0x0376","0x0377","0x0378","0x0379","0x037a","0x037b","0x037c","0x037d","0x037e","0x037f","0x0380","0x0381","0x0382","0x0383","0x0384","0x0385","0x0386","0x0387","0x0388","0x0389","0x038a","0x038b","0x038c","0x038d","0x038e","0x038f","0x0390","0x0391","0x0392","0x0393","0x0394","0x0395","0x0396","0x0397","0x0398","0x0399","0x039a","0x039b","0x039c","0x039d","0x039e","0x039f","0x03a0","0x03a1","0x03a2","0x03a3","0x03a4","0x03a5","0x03a6","0x03a7","0x03a8","0x03a9","0x03aa","0x03ab","0x03ac","0x03ad","0x03ae","0x03af","0x03b0","0x03b1","0x03b2","0x03b3","0x03b4","0x03b5","0x03b6","0x03b7","0x03b8","0x03b9","0x03ba","0x03bb","0x03bc","0x03bd","0x03be","0x03bf","0x03c0","0x03c1","0x03c2","0x03c3","0x03c4","0x03c5","0x03c6","0x03c7","0x03c8","0x03c9","0x03ca","0x03cb","0x03cc","0x03cd","0x03ce","0x03cf","0x03d0","0x03d1","0x03d2","0x03d3","0x03d4","0x03d5","0x03d6","0x03d7","0x03d8","0x03d9","0x03da","0x03db","0x03dc","0x03dd","0x03de","0x03df","0x03e0","0x03e1","0x03e2","0x03e3","0x03e4","0x03e5","0x03e6","0x03e7","0x03e8","0x03e9","0x03ea","0x03eb","0x03ec","0x03ed","0x03ee","0x03ef","0x03f0","0x03f1","0x03f2","0x03f3","0x03f4"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});