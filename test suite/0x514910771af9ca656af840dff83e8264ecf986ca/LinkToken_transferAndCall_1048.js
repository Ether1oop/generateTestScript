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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x09cfe12d0559b40000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000120adfd42f6bcda32d1d696d2a560f3177efd0420d79e5c56c4529199b9853161b68ef38265e5f7450c174160ab1dfc80cc12bdad2d640388842030c5c7b0ecd2e9ab4690e111bee41401033124abfa75305c3dc1c74f2f403ea4a78c47a63831d3617f67a4a239605217400b3772bb51cca6fbaaf5c6e4ae979ccc7a58e9480420cb2091f09c478e917d832859b0a3de96b42431cf711f16fb38ec090290bf119f9652451ca34accb4d7d42cccb381ddbb91e18b1499c028fb2892d52ddf818392f3d676ba161528a994ebb154395f3d3d09367c38fc2791895cd202c34dcf4aeaa59fb733c1e82fdc52534dc16041dd37c5dd78eb68b4e346552d6defafc22dcd1795cb5d3e8e767a56b8659d762f43f592092f0c12a8a8ad54229b6d027083358956afe86e09ad5994ec0f63fbeebca1fef0d60c093068f9ab66a187c30bb26428955253d423922901891cb0a4e73029044ff19fe8db4ab370999cbf037669bf668b7de80d1444b1e6b53526c4c32699f71f2f9e5af0b7f8f1baf8e6e3c944e10f4521e6f0f25bf1dd99f275f6bcfac85968d19e6c5e927e556e974e514af6fefea416ed4ab54025eca71e63ce01c72febecdfe5242643f00febd51d1175cfccfd61e0715278c0a1de0d6926b3ba11b1656840f1834493ba4228146a288b318e3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});