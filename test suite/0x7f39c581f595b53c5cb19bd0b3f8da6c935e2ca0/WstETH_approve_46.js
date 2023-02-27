const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WstETH",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WstETH");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x76943C0D61395d8F2edF9060e1533529cAe05dE6","0xb69175f57d0264a5");
		});
	});
});