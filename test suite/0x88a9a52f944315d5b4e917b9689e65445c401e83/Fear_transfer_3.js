const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Fear",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Fear");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Fear NFTs","FEAR","65000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xc39A2D04aca9E9B144A4b16b1cD51AF8446a1A22","0x0a533bb5d6cad44000");
		});
	});
});