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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x010f0cf064dd59200000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000122112348e0d694ca70c412f044ad64fa3f26b67ef3a82c72d1299605beca1b7bc35163d43858320396232568e0e2d49a73c820f726e163790f51fc81b213c263f8d4eb935d2a34fa0c41385873a12f6a3292d1c2742e59e3f49c9071bbfaf601fb804a2d2b8dde5d9dcd05b7590483f382d6515e27b99d67071cbae1f6c1534b0aec99c765ef8a00e351cf04f280dab0d5217556208c3d432eb2e6e03480db0a80f53919d168bfbaf32d8e2d430e11bfa6c8237a4fd6d95040359d566d6fa3f2be7d78d39240272f07a7de974e3d17ec7079be28041a58c29d5d50c7b36fd3315c0f02eb57dace720c7defa04c47fd8e2c860a7b889fbc02158b15e439b68d8ae1015c46c6cbf2dda74873bade360813dad676978b731c8587d0641028fb1cd84afddf7391d8cc035f1f5bff1d10e12797a4069074b2c95985f2cc345614a6589f0f6bfc61b93333f8e9e2383d1e246f50d10686e6d52cb70624eeabbd1c726ef9a3135ec5d459dbf595cd28498ec0033a7b140d4abe8d27a4d64d5d8c0899d9334df94176350558172ec79d27d3b747475b3f4772e77a2d6a7646fccd57b2f3bc5776f4b0ec98639d8907d73295b983bdc1aeecbaa4147e4a274a03988e617885355feca1cb8c746c8376b07675419933078433e4659308976c904000dcff4b032b0589380d3994681ce4fa258d28ffd0671e0a283694c7560927029e566591517559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});