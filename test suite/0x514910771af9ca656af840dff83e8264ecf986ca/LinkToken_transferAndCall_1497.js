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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x022b1c8c1227a00000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012a74677fcaafa5d71687f570c8095c851c41e58e05c055c6d170406cf3a302beb9ffddaf3af0243fda64bf8d3cbf6b9c35ddf0b5d3a8f0b08b72995fb69ca443e5a9de82c56e2620337dd93adc2ea5056260fb7764fea879bc9dc0856941e7cbadef38f90c76a1a444bc7f790b30914a0fc7a98ece8d7d603d1be69b9c13dc6c8dcd4e8522926e98c8a0e317947614e82413cd85092e5d495b9a8d15125b684fdd680b8656d842c88ed623ace754e140269c9d01b1824027366d0c6c84c12dd397d244f4e3b06ebd9d2c3d2984a43fdd03da8ac9da7247154dae8d6a639b4c2ac854b6300855ba76b986fdad26f2e57aea0bcd4508e224222c79e83de5eff17b193fbf2892a12860907c6d2391fc1a377ed8fea51c441ba3741c4d49174f5ff27495bbe16f7c0b6732dde3b7e6680d8f4ab9b37ce7815247645e45d9bacd13c51c7b0d202aea402af5eb72444d9a865b227b0b154a434afb900e78b263897a5d66e0b7ec0e2a251d3708c615bb4fcd70a24e23d191183cc8faddb573b50cdc71b4afe7aa967048b3b030e30117cfb69ccca68daf7f16defe321398948e131b38e04e5ee2ea820c8ec8404668b034d2178604ffa12af3bbc662029ce5a974fd76d7092c7f492e2dea7a4537171d6596238942a893970514a49baad1228559c74869f405b149f737ed5b0871be75fcfcc2f1c8d2cdf8173aa1dd8a2c45955ed8af742eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});