const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("ETHFP",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("ETHFP");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("ipfs://QmdQg4PV6CCAsx7dErrMmSMQKDvXHi7TbCyHsEdg8axYc7","ipfs://QmVrAnpoWwRHCmgvVfrqhadtF92rzrVZEyWsbWNNs9EVHm","1000","0x949231bfff2bed87a0556972042405c2a867f53df3919fe7cc080c56bebcae5b","0x59A32f97EDC24B5ec4aD2025B23BEB16Bd78bD30");
		return {_contract,account0,account1,account2};
	}

	describe("setApprovalForAll",function(){
		it("testing setApprovalForAll",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).setApprovalForAll("0x1E0049783F008A0085193E00003D00cd54003c71",0);
		});
	});
});