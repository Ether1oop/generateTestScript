const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("PlayDapp",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("PlayDapp");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("PlayDapp Token","PLA","18","2500000000000000000000000000","2500000000000000000000000000");
		return {_contract,account0,account1,account2};
	}

	describe("transfer",function(){
		it("testing transfer",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).transfer("0xbccf452767A44Fd7F03c9FF3EFD3290B3dfB3609","0x0fa9456e41b8e3d80000");
		});
	});
});