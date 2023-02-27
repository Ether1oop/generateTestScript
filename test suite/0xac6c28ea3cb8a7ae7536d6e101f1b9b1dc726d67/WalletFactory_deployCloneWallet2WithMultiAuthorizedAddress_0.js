const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("WalletFactory",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("WalletFactory");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0xf946bCEa25F1102314fE0A65D94A2F729418aef1");
		return {_contract,account0,account1,account2};
	}

	describe("deployCloneWallet2WithMultiAuthorizedAddress",function(){
		it("testing deployCloneWallet2WithMultiAuthorizedAddress",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).deployCloneWallet2WithMultiAuthorizedAddress("0x76859c75A24B751B9bD87Dd30daB25755a0BaDAc","0x00ff48a2f09ec05969efe3176af6364a43687f52","0x5a542240fd4702efdc413bc467184d252fcc48dc","0x0000000000000000000000000000000000000000000000000000000000000000");
		});
	});
});