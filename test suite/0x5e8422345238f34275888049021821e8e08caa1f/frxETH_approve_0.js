const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("frxETH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("frxETH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27","0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xa1F8A6807c402E4A15ef4EBa36528A3FED24E577","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});