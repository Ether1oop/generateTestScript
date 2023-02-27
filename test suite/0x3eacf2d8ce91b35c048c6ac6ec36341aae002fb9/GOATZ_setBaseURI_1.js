const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("GOATZ",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("GOATZ");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("","0x6401694dbA7B91a105B0653Ce167cf5527B80456");
		return {_contract,account0,account1,account2};
	}

	describe("setBaseURI",function(){
		it("testing setBaseURI",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setBaseURI("https://goatz.mypinata.cloud/ipfs/QmcNBB9T46Xs76Ed9t8waWmDYZXqtVuq5wzE3DiuaTCmCu/");
		});
	});
});