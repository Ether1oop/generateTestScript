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
			await _contract.connect(account0).f(["0x05f5","0x05f6","0x05f7","0x05f8","0x05f9","0x05fa","0x05fb","0x05fc","0x05fd","0x05fe","0x05ff","0x0600","0x0601","0x0602","0x0603","0x0604","0x0605","0x0606","0x0607","0x0608","0x0609","0x060a","0x060b","0x060c","0x060d","0x060e","0x060f","0x0610","0x0611","0x0612","0x0613","0x0614","0x0615","0x0616","0x0617","0x0618","0x0619","0x061a","0x061b","0x061c","0x061d","0x061e","0x061f","0x0620","0x08a1","0x08a2","0x08a3","0x08a4","0x08a5","0x08a6","0x08a7","0x08a8","0x08a9","0x08aa","0x08ab","0x08ac","0x08ad","0x08ae","0x08af","0x08b0","0x08b1","0x08b2","0x08b3","0x08b4","0x08b5","0x08b6","0x08b7","0x08b8","0x08b9","0x08ba","0x08bb","0x08bc","0x08bd","0x08be","0x08bf","0x08c0","0x08c1","0x08c2","0x08c3","0x08c4","0x08c5","0x08c6","0x08c7","0x08c8","0x08c9","0x08ca","0x08cb","0x08cc","0x08cd","0x08ce","0x08cf","0x08d0","0x08d1","0x08d2","0x08d3","0x08d4","0x08d5","0x08d6","0x08d7","0x08d8","0x08d9","0x08da","0x08db","0x08dc","0x08dd","0x08de","0x08df","0x08e0","0x08e1","0x08e2","0x08e3","0x08e4","0x08e5","0x08e6","0x08e7","0x08e8","0x08e9","0x08ea","0x08eb","0x08ec","0x08ed","0x08ee","0x08ef","0x08f0","0x08f1","0x08f2","0x08f3","0x08f4"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});