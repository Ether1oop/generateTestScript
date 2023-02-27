const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b","0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599","0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"],["114623013830261848","101997","16813935874779096"],["0xd8EF3cACe8b4907117a45B0b125c68560532F94D","0x90F765F63E7DC5aE97d6c576BF693FB6AF41C129","0x08f866c74205617B6F3903EF481798EcED10cDEC"],"0xa4c8d221d8BB851f83aadd0223a8900A6921A349","0x421f223e19877D9765Ecd6e8EC4812457229B36A","Bankless BED Index","BED");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x881D40237659C251811CEC9c364ef91dC08D300C","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});