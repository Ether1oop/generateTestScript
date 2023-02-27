const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5"],["333000000"],["0x338BEf3f37794dd199d6910E6109125D3eCa6048","0x3D8d14b7eFb8e342189ee14c3d40dCe005EB901B","0xdD668Fa631C0b3F863e3A830ca23Fe75100009e6"],"0xF1B12A7b1f0AF744ED21eEC7d3E891C48Fd3c329","0x69Bdb276A17Dd90F9D3A545944CCB20E593ae8E3","ETH 2x Flexible Leverage Index","ETH2x-FLI");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xf42eCDC112365fF79a745B4cf7D4C266bd6E4b25","0xfe00000000000000000000000000000000000000000000000000000000000000");
		});
	});
});