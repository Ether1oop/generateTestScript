const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SaitamaInu",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SaitamaInu");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x0c17e776CD218252ADFca8D4e761D3fe757e9778","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});