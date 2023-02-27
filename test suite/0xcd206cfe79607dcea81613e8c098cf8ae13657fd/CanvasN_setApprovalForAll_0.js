const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CanvasN",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CanvasN");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("test123","test123",["https://pfp-art.canvasn.co.kr/0xdfd118743044c7a7bcd8ff588557d06719b523ec/2/latest/json/","","0","1000","0","0","True","True","False","0"]);
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",1);
		});
	});
});