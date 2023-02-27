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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x465d5e5ae6b9080000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012710b1c1140680dd8dbd3c680f90d526f55bee920ffd057887aebdaf9c43e5f30dba0aa2617d285e3559cd7a5b42d137b84c3e1aa5405490a3f7b7081bd1ef0eb7d2510ffcfa38691a13df90e1df6c111958bd26e170f31319ff7fe8717aba75f3d3be1174a64ebeea89d0c2d3b23788a9656645eb568f4a0b2f389d80f68e3d5978ee98788d90724fbd1e65310fe32b6fe0df0e00045a06b0e24059cb5c9cd14217f8253a501da3e52548732d17fdd3dd5e278f124fe2c3e2fd9a0a7b1d6ec56209a8280613c6c72b64fcced53da4fa80334471d81fdcc826b14e1883121364d76e6f54b005edd0931ee6e99aee578bc4ea2adb91f8173374422b7a8a6e49a40c60fcdd75fd049df14c1d3c6c69b8cb8b7b2b82609295f70b9ab5cf5afbcd86493a7b96a6a0791a390f3684335d06e48e33b0c476aec3d3485d4cf538eaea60185457d8dff0d2c9bc5339aab0d76205d0d52e2b95a6c66de58f8cac62e60639537dc64f480bde4684ad6ea788ca6059c58943b8dbd740172cefc3acd8eaef8fc80df9e91d25e684030a29a302a953b95dabca6b417d018baf62278a7a980583f0f0f6dbbec26dd0e99c82e871843c919005e2e3020f2db7ec0e4ff7a14568297df4bf81d2183f68f06b9ddb3b311bb7f794ef6f09e36f61d9c18a5545598eab9975865968ba748804f858d56659323cb40cded70f69b2643c4c6a34d2bb32eba94ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});