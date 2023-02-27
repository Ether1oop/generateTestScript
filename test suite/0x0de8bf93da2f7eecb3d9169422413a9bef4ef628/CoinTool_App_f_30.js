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
			await _contract.connect(account0).f(["0x0466","0x0467","0x0468","0x0469","0x046a","0x046b","0x046c","0x046d","0x046e","0x046f","0x0470","0x0471","0x0472","0x0473","0x0474","0x0475","0x0476","0x0477","0x0478","0x0479","0x047a","0x047b","0x047c","0x047d","0x047e","0x04e3","0x04e4","0x04e5","0x04e6","0x04e7","0x04e8","0x04e9","0x04ea","0x04eb","0x04ec","0x04ed","0x04ee","0x04ef","0x04f0","0x04f1","0x04f2","0x04f3","0x04f4","0x04f5","0x04f6","0x04f7","0x04f8","0x04f9","0x04fa","0x04fb","0x04fc","0x04fd","0x04fe","0x04ff","0x0500","0x0501","0x0502","0x0503","0x0504","0x0505","0x0506","0x0507","0x0508","0x0509","0x050a","0x050b","0x050c","0x050d","0x050e","0x050f","0x0510","0x0511","0x0512","0x0513","0x0514","0x0515","0x0516","0x0517","0x0518","0x0519","0x051a","0x051b","0x051c","0x051d","0x051e","0x051f","0x0520","0x0521","0x0522","0x0523","0x0524","0x0525","0x0526","0x0527","0x0528","0x0529","0x052a","0x052b","0x052c","0x052d"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000002f00000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});