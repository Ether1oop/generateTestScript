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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x5150ae84a8cdf00000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000122ffe6a8b1d4286adb659425641b0f435892e2f017a1cabfa01285c553a1516bdfe1bd1b4d4c8953771d737c00982020f52904f2e504abad967d552fbb998b51df89fff42c574942d76f00832ed9bf119a63728132d86ad6c57b4a6881e7c3da0dd41a050f59e9faa26a8e9834b1bc0f596e3b1fa424f9dad1e9098e30c9c58263809fe12ef9c6921a77702d64c4194a228631ba87a0042adcdf1548a4ba1f5ffbab007b8edb5e2ba6336a37e2e2f3a9c8b039ebe9d059bfc99be0e6edb6f4404e36056ef85782c89688123c8c1b2a123d7f7963be34e102e85dcec1afc80975d38b5e4f63a9b583fa793ddd9f8b4b34bd6656b66741d43a3b6502d261e35eea085a8d1ece2039d092e43556098fae38baf063eec544c8492acd7ab1accaec446d71f19d9f5808978315be050ad92c582a536ce48c278cbf201d4cea4186a4e7eaef13be9d5f91fd6b246390b25cadb6e15df00d1e29945f21f437f5def5fd072e61a9e18484645b96ca82a040bd497c0905fc85119efa51a21fccdc67515d9c3cb73519d21315a0fcf5df2ab72103cfd0598a96f611bd9e2a1699a7058a4f136940c71a0f2ceb76778f286d7a01c06594c82a37e1a2e82fb5e3dfcac83ac93e6fbecac61c12bc5089203ccbfe4f840ab140ac26c96b1522fbc958f80eb09c33efb4ca4a84867c4e98c061c8abb7ebcb0401654ff5be2910d29e790a4f567f610e5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});