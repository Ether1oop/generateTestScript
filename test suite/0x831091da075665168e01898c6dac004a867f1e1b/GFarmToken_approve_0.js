const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GFarmToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GFarmToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xC66FbE50Dd33c9AAdd65707F7088D597C86fE00F","0x1E887E7115321B4ee5d58DD446eC09e12B45d81B","0x6E626A14316b142D785AA71E251547f703197847");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});