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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x562d6168761eb90000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000120022efa58265426c5b49a41a1d327c47f0fd1b4637d8440c6b0b35a1ee492dbf86c77ff19c802a5d8ba7a92608dc1983ea4ad6c054fc7b2bc9bbb367a0a0ccb7ed89175483c6e0952b6c881eeca8d30d229519f28d25548cefbfaeb2226e22f6f5c1640f492f1d3443f09429c2ca1134168413a0cb56071a4c1ad1d25c9239f2812c9312c792a01c4d87c6e592acf6ddb51fdbdc91da0fbe95b766aa9c7db4dbfce0d13063ea45e5969a7af491ee90b91d2f399edcb12b35f05031edd908c528a810a7aa32a79b3493ded078098f9e8ba63606a2e9629fb1644511afc502b13f158bcc6f16f68195ebaca87f7fc456d318c9a1b37e66023964b9513ea51d35434557bc8e245f93d5a0dec6a3242d2943cfd60a83b53404173aa181926aa26abb5eb9f7325863e9d038a032ba8c3a8c33463b4cec583c61c1868ecdb210fa55f673b2826651a038f2e2fff9dde73cfe2986779ebcbebff1bb9125b2660139c0be3b9171f3b08c7390339e35a9cd4383d55d59c006b9e3ab7789ab05d1fe5a8f7a356da471473fd41854f2eb3da9cab3c4a82eb9a59ef64307f70904d07246dee2b4ba756ae07acd683034ba635c02d7c2129003da7de158df343c214f9bd114f179341b73f62456fad222cca62e19f484dc10b8ccd3a8c10ed8c8b50d56c4fc2b6b1c013d0b5cecb8df3f1a6fc556f5fe66de0c4d1cd8b0a82256262fd793cf2fe5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});