const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("KingdomLand",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("KingdomLand");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xa5409ec958C83C3f309868babACA7c86DCB077c1","https://lok-nft.leagueofkingdoms.com/api/land/","League of Kingdoms LAND","LOKL");
		return {_contract,account0,account1,account2};
	}

	describe("mint",function(){
		it("testing mint",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).mint("0x2a5253291002abAb2824a7C33592AFe25A5ce534","0x020eb7");
		});
	});
});