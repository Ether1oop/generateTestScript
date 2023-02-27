const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("Token",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("Token");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x29c324e806047075b179dc0d21ae27612EfC2555","0x906a96fB54FdF91c04097253410d35Ec2DEc283f","0x4D729D5d332Afe2e0BA5e88d3c47AB772F83169C","0x60EabB367bD7DDa81825D09DC7E191A127F65cB8","0x2dCfBd1EE5cE195937f913a6F8D18F9c9fd33eA4");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0xe66B31678d6C16E9ebf358268a790B763C133750","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});