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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0xa2a15d09519be00000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000123a010da461550a71cd556b50202488365617ce8a4ce01f638e70b0b3de52a8861121e3dfcf728235b9db0176536ea4dd67f7e717329e792c21f043a08cb7da41d78b2d6871e231a7b32c992e30b7358c7b382b2a4bc7ef73631979e03dc172cb0cd2bd77680caacd9f3ea29ed3d1a9a75ae1ca4ee781386ffb23d7dbaa62fc711b72e86b320fab3086bfd910535b6d5b8336823ad1e1f35d79fc5646dcc915f334a0aca147b8c3e9876ebe2cf6a5d05aa5287945aa10649ea059fdef28669268170e6ed6364c3eb485fc65a25c4c6e89274c787a15a418edbd661aad132673debc0624360b31792847a2b5ccae6abd2d013cdb0bcb9cfc21de2ca713927833627bce175942f4ddfd99d0bdc56aec37c48ce94296996e244a6074163cf31c32be119af2ef59847c423ccb2344cbcfadfae6af69d3906e3cc4299ae15bae8915e77b3928be36083c137d9c0a160b318088beb082ec5511bfa47ae791aef1dfee993b4102722d1e49431582444d0e4a5f0223a86c73fd8193e0f91afb42dc29c97c51a964a2e5b66205aea47ab5c11baaa9b6998d6ed19f76259b598903e08cf4215a14087972d9f519ac8822c0e46b2b76f82ef7e3d1c5ec0a172a8545c8cdcbd62bdc2e5d0de5e8d944dbbc5984072ab38916ec8b667b1e08eb21b0cfec3d4f8ec485d7c4b903b7ceb21e3a17615184e85fbdcb667ffefbeaa71505771816753994ee9926fac744c3a88137188b207ff7b82efa282c9b69f2c206a863cf77810382fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});