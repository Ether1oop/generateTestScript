const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("RLBTRFLY",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("RLBTRFLY");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xc55126051B22eBb829D00368f4B12Bde432de5Da");
		return {_contract,account0,account1,account2};
	}

	describe("lock",function(){
		it("testing lock",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).lock("0x0a3a1EC7cf57Cb920C66B4b4e7956A0bd0234CBD","0x20846cff4331b590");
		});
	});
});