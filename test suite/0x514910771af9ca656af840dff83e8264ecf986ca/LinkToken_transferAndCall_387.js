const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LinkToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LinkToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("transferAndCall",function(){
		it("testing transferAndCall",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x8bc6eea2e1bc0000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000127340885aff9bb785bb441fdce5efb05e90d470345cc6c6b971b9aaaaa807eba3b455915423ebc0f3d4ec10ca4278110d831363318bb269b21351637b982684dd6aa96e894fb6cf5dca92726174a94ba7a5d8794c0da7562062c3cda200be334bdefac4dfb0f52154a97114e8c21720481eba4329d31df62bb12de602ddd1f470b364bafd7838bff7ea6542050bcaa08935cb599ca0a8819aaa4dedbb55b095d9cf6667ee96710f5d2cf2e79e96eb1fb0ba7b6e99618bb912738bcbd93ce1316088a6d4f02205e2cb8863e28e408d7b06175711598e78709a2a93109e1bfe45d09f703bb1309798650a8d9cbb801692b9c32cd0d0d0c781c29ea56661760755a3997871d97bb7e10983e368dc9cd5d8cd4b85ae007ab131c0057b5ab6ed1c28db35ea2a4acac36d98b4fd0aa9298a6246e8df532d9f5c7bcfd7d580a500a4f9f1e5b6587940aea81c0cea2bb4e871f418a2e0d2f15444cb0a43f9853ead0d0fce7fb7f1402c2b57582b417f0403f3630ebd73b1b36c9088252ffb25b836e61751c2d0a4370eb698c9221649c13fd93f430929e36451447c95ab821e8e98517a270f0f6dbbec26dd0e99c82e871843c919005e2e3020f2db7ec0e4ff7a14568297df4bf81d2183f68f06b9ddb3b311bb7f794ef6f09e36f61d9c18a5545598eab9975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});