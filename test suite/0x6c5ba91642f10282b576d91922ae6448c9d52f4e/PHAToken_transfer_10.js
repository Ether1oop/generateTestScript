const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PHAToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PHAToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("1000000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xad560524EBf9a0084D809C0DFa87fF3D69E948d6","0xd9c5a5e4eb199e1400");
		});
	});
});