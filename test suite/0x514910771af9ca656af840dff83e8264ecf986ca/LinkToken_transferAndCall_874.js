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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x1b1ae4d6e2ef500000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012aa5de9265d47f98617ce5c05fc22c2420f7ab566eb151f24185ef9feff32fc249c83b52db4bb2bd5301a1b35dbda399a3424169a2ada1092d6c2c6704a74f390cfcc32d58b7cd25a6ec450fe70bb61c437896fd5ea73461162e7370bbbbc5008bb1ace9f4bb7e544100cfe9b9ecdf1202404414f879de82c1230145f2b67084554d204169c6feea34b445c093d259c452715aa38abc2efb2fc74bcd00b47c6de47019f9a5e32898cef26ff161f2e6f580be23e007102a4a9f34bbf6d8cff809229b3e995aa610355e8a1139b9f148af2e8e81d9f7d66979708853e20367034ec5356fe9f39479d3924d73a6ba7633a019b72bdde6ff251e944a9e08fa214b4c1e0fc74f160f074bd0419c8ab8a9b37e85aa87acdf3696cf7b7214177860933be981c3ee6bec2f8ee3e3b0de75ed0095976a19aeb72daa0ba2f74a42e210dc474c3994c837f04351fc64316ecac359f19fe922cdc714283a9e567110f28b289cce61a9e18484645b96ca82a040bd497c0905fc85119efa51a21fccdc67515d9c3cb73519d21315a0fcf5df2ab72103cfd0598a96f611bd9e2a1699a7058a4f136940c71a0f2ceb76778f286d7a01c06594c82a37e1a2e82fb5e3dfcac83ac93e6fbecac61c12bc5089203ccbfe4f840ab140ac26c96b1522fbc958f80eb09c33efb4ca4a84867c4e98c061c8abb7ebcb0401654ff5be2910d29e790a4f567f610e5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});