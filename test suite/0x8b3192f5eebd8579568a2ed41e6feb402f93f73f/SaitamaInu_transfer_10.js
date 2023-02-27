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

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x0C5d72fB6b833DC2FCdAC6A111F3d16094E34eA5","0x934372fe912298073d");
		});
	});
});