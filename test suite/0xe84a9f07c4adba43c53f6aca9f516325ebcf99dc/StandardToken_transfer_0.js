const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("StandardToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("StandardToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("Rino","RINO","1000000000","8",0,0,"0x5B8A969814AEa42CC1faC408e95383eb5c44e059");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xD69283D7925d5315562d759FF5D7bAd7862e8728","0x02625a00");
		});
	});
});