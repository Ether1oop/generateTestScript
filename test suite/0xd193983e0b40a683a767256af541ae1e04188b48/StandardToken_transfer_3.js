const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("StandardToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("StandardToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("KND COIN","KNDC","2000000","18",1,1,"0x5B8A969814AEa42CC1faC408e95383eb5c44e059");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0x123D815772056097e33741b32AC28e0BE598323d","0x0a2230c203d89e4eea");
		});
	});
});