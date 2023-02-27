const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Pilot",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Pilot");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x1684F4D3C7E27F02c2072adE8831338d1d13DBe5",["0x738B859088dAEF78bDAbba4EeCF2b4531cF4C6c7","0x4f6F49194E75C347a41E020d31d39C2F9A24B6E1","0x3b5DdF126F1cf58cf6597e86d13428C3A25044D3","0xd94121f2e06b80BDf098f9975c236384C222f495","0x1922af4365B09a9d818833b730324f7Ef6335c9f","0x4162989A2d97F3A4f082184E47AA61F81b21a7fD","0xfa855e50537571d3cb242243e70E617166e628e8","0xC0D0c55BCF268D1d9e58AF4Df4e8755E6ce36a05","0x8d6A8AD2BE417F0eF73e2F523D15e673D962765f"],["600000000000000000000000","400000000000000000000000","250000000000000000000000","250000000000000000000000","9000000000000000000000000","3600000000000000000000000","2250000000000000000000000","2250000000000000000000000","1400000000000000000000000"]);
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});