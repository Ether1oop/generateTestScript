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
			await _contract.connect(account0).transfer("0x585dCD8cc0Ace7491B70065A521EBaF65d3C1d57","0x02882198c28fae3e");
		});
	});
});