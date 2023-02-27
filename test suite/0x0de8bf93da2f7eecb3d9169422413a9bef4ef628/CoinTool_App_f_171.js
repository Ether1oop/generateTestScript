const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x01e5","0x01e6","0x01e7","0x01e8","0x01e9","0x01ea","0x01eb","0x01ec","0x01ed","0x01ee","0x01ef","0x01f0","0x01f1","0x01f2","0x01f3","0x01f4","0x01f5","0x01f6","0x01f7","0x01f8","0x01f9","0x01fa","0x01fb","0x01fc","0x01fd","0x01fe","0x01ff","0x0200","0x0201","0x0202","0x0203","0x0204","0x0205","0x0206","0x0207","0x0208","0x0209","0x020a","0x020b","0x020c","0x020d","0x020e","0x020f","0x0210","0x0211","0x0212","0x0213","0x0214","0x0215","0x0216","0x0217","0x0218","0x0219","0x021a","0x021b","0x021c","0x021d","0x021e","0x021f","0x0220","0x0221","0x0222","0x0223","0x0224","0x0225","0x0226","0x0227","0x0228","0x0229","0x022a","0x022b","0x022c","0x022d","0x022e","0x022f","0x0230","0x0231","0x0232","0x0233","0x0234","0x0235","0x0236","0x0237","0x0238","0x0239","0x023a","0x023b","0x023c","0x023d","0x023e","0x023f","0x0240","0x0241","0x0242","0x0243","0x0244","0x0245","0x0246","0x0247","0x0248"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});