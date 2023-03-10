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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x017b7883c06916600000","0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000001256ecb7411961021bc803971d51ae1c9d10756682b3f8c4aa531d32df0075f547e4d8326b7f514cdef8ab4512ff5d3adfed448cdf02b73bcf7979e8f7ef0caa82f9d080ec67ca84f275b1a7a87a1c6ba0b867d860969ebb0eebf6e31467afaa134ddb7b304433927be516ee40355953d78e6434f6e5c9796a17d7e33fdd83edf8b5a2ff8f425d27e9786e092831fded98b2fe6fc4a84cfba52485dfbaac563d7208408727fe12c2230a63fb194d46ab949eb3289c3cbcb34a57783f7bd4dd76134fc379ac8b48568c4e5db4b9961dc9daba851d058a96ee6072b20b12fc70acfd37a789318d0779c45067fb9e8ae3893c6db0edbcefc6ebe93d66a7f5d5d285761f0289a48f41200f40c065b80d1309e80785332d2b0eb73fb10bc7daecdfe8f4080600f132644c1695339b0965cb0588d7075f9391ceac377684318aa3e99a9870ad90b430be2052cb96f766ea8cd43cc6d4581f4f2f4e8aef470fb31c846b643139456325f5ad22b46a0db37a937edda58712498feb94e206836abe92fa5c30f555c2c10bc0bc141bb0385a95446a2a67e86595c605351bedf8263c82ea0650b9db788a53fac5a85d027e382ea38fcfce57381e4ae6f3d9abdb180715ffcfcc8042c28624aa5f78c3940a01e54f53b4db5a73e5dba8b8ffb3fd744c04de721595b57c1dd58ecf97866eb5df491ab02d830b5e5a5221efcf60cfb9ec0f079e4842eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});