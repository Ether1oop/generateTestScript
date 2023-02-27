const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("AISniperSociety",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("AISniperSociety");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("addBots",function(){
		it("testing addBots",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).addBots(["0f46A8C6e57B6296D37c49847012a4579A76a065","22f4fc9D356414556f7b0D6bfAf5DBe74f417b7a","1E3739f49444fDBcB015088214B827845Fdfcf03","d992889ef21F69a78Ad34976316418202C1fA165","175d04fb5953D3F2aD2aa340e45691B4DEb616B3","61bF952A18E95684513D452bcbfEc1f4CbA01Ff4","b99f0bf8fc496Bf0fcB7423EB532D70B35A57Dd7","a6a1529f06808587f9B646E0970c38F0dbb8A4F4","b8F13240608700c6d69ABdf06970A7a901E7DB02","A10E3AF40d3A4EBcb7406CBf3EB16C1a0acb1888"]);
		});
	});
});