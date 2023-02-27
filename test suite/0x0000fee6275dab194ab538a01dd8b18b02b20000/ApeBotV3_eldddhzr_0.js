const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ApeBotV3",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ApeBotV3");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("eldddhzr",function(){
		it("testing eldddhzr",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).eldddhzr(["0x00","0x1b5cffe9de0927c0398ec7346dcd622edc5ae82352f02be94c62d119","0x00","0xfee6275dab194ab538a01dd8b18b02b20000","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0x37eef4e2c90862","0x80","0x02c0","0x20","0x14","0x00","0x0fee87255807a120b484dd07a1c62b75f65fe949529c0e543a14453e","0x00","0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","0x03e8","0x37fbd7f935cb2a","0x80","0x0140","0x20","0x01","0x80","0x6b626586","0x7a250d5630b4cf539739df2c5dacb4c659f2488d","0x04","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0x6b175474e89094c44da98b954eedeac495271d0f","0x8e870d67f660d95d5be530380d0ec0bd388289e1","0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2","0x0f0061a8e7462ed316f6fd3442fd3e78fde1ef745a4c87b4","0x37eef4e2c90862"]);
		});
	});
});