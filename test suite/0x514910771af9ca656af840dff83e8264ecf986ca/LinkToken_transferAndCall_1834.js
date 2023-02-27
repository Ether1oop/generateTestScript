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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x4e6347fac37ed80000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000129f1af20abd0bbfd0cfa10bfee80da02a3b30c26a288de7cae80ea31b7b585aa4bb8f51fd5c9b153d62d4d938f34af152aa73ea1a199853041b80a1d3e9c16ea7fbf55309aa25431c9f7b97135d3435277e6452bef592361dfcbbcd2b5d17672574da9d7741436a98cefc8b9756742bf745883e19420db4550f64e212396601c74cb0f03055625a3821957ec96d1cef240ef48bd5730db980317e1047b612edbf3c1c5a9596e200331b979cb8f1f3315fe0b27409b981fa92d0b3c9a4998da51a778a1f8720768fae01793bb94b162b8d16d5a7f138ffe0a7d06da34e616f85c03fd701e5fc8ceb5f9e8a1fac4b32cfea2ce7fc18f2c21d822ad9638a495b0110c95c7cf0157acf5e662e527ad90436a4002ff8999fce135bb8b671b4878abe42d1fb6f88663f93b2a0985f3c61742e3d2497afa3faade84381bf0a7c41833b65ad059b9cb4eb328ed06cd40be769f2bbde506f6c58a902235e865b44986c27186a6089dcb1a16e149fc3d9a08bc193c913bf2623834b62580efb542eb38973263392e387a728e8a070955e6b1a994de02e99efb448b22d28a5c31aac471bb317940c71a0f2ceb76778f286d7a01c06594c82a37e1a2e82fb5e3dfcac83ac93e6fbecac61c12bc5089203ccbfe4f840ab140ac26c96b1522fbc958f80eb09c33efb4ca4a84867c4e98c061c8abb7ebcb0401654ff5be2910d29e790a4f567f610e5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});