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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x878678326eac900000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012a12be7da16e393b7acd208aa408806fb38f88ca93bfbc5505ac7b4f90b08e8ada5601094078bb6a89fa46f8d96b3d43fff961d784790434c5e1ce5e6c9db25fbce65b1f1af673e030e281ad14a2e2b65026d8ad793bb9e4450a71515b2a4f6a991dd1911234a7c98880acb0fc71c270fadd71e96b99b8e100ece85e6d5da1eb187be08381af794bfd60a822e6b50e701723fbf128874794515e7b2f768754e47edc775cf3f16dde89b98189a05f75f226391b57eb00095db79d98f216e1f13bc99fe81095c9903b08d88a5d9c30dc7987e74fd33100e031c4ddc5d040a674baa6e136c0fc4be58627dd6b7a86fbc8fa980bf1b63f4b504498bffb8caae732f334074160639b21f2d445a7004c327cb88b7d950cd1c379a63307994a1c0c081956fa223725884c16933374dcfa8e46133b3d1cb672789adc4c270f34eb9ca37326461273e075a6c301c5e710357a0f89f868bb13f8736cfd4a747f346bb4a85076e0b7ec0e2a251d3708c615bb4fcd70a24e23d191183cc8faddb573b50cdc71b4afe7aa967048b3b030e30117cfb69ccca68daf7f16defe321398948e131b38e04e5ee2ea820c8ec8404668b034d2178604ffa12af3bbc662029ce5a974fd76d7092c7f492e2dea7a4537171d6596238942a893970514a49baad1228559c74869f405b149f737ed5b0871be75fcfcc2f1c8d2cdf8173aa1dd8a2c45955ed8af742eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});