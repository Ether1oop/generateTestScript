const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("OpenAlexaProtocol",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("OpenAlexaProtocol");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xA35E62E5EB729142643Df04838e5C71113564Fbd","0xd63fB67D648e72818B7aaD9ef1943598eAA0CE84");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});