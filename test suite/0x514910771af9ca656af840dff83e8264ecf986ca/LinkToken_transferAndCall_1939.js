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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x3643aa647986040000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012be2740633ea21b1fd76c1d0928870ba36b1c689b7ac1f8c1067315c0624003a87833f89b726780e4e87bd9f5d485993b5de1a1fbf057cb95e71437a93e74de73909f58c4b0906f19a926537018ed3c4a7faeb7179fbfc2398d7044c563136e57e07b0b00729ac1fe5518de5035d9b58ad055aa4e09567bb1fd13196e10e04788c4a1a10703be5ba5b36b2f7309ef88b3135cabcc96ae2377895ee210504e0f6b6e1989a93a2d06bde142465e7166cf77a0adf39b5a060e39d9d1a6f54e1d45b8c981f33d386f06f0893cc1fe57f100442d6db4d3390e931b29aba89d539b21885c234ae170874ca69bfb48b81fa9178678cf57a19aeb56737ea052dabdd6521aebcb435fe71f41d7ae9c78532c1032b726735b817010e280e26ac4cb2e161adf9fd7bf19c82c80181084a760322f8e4b68da4340efcdf793aa6556a6573fc30ab91c4545f4558ec45c358bf6fae5ab79f88e0b11ec79582a633c0ebabc6605f9d5428f0dc0274c261f84ba1e443714e9aea5ef2bfe29c3c2de4c12a6316a47b377f35923cb54e091658cce9059a4140f62c331824e8ffc30041fb9c7a6582619c4dc0e8a6b51312d2d51a279e11eb420242be70c91b1de3a7236d452721a1dd3dde0155729bc57709d38c8d2ec605ee2782e258f7c6e2a21b2319afc50180ba26b1c013d0b5cecb8df3f1a6fc556f5fe66de0c4d1cd8b0a82256262fd793cf2fe5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});