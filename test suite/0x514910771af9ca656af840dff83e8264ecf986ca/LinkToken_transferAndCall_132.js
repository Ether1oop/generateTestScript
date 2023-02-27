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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x10c7f3d5e6ead20000","0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000122c3c308a7ba9a35fec1dc0928e76adb62045304e0f410ebb5c066b60380ae11585857a61b4037aef20fd0a8c5d1404d24b3a7b1c48b9e7f3d75e16feafb89f6b262d31b43e1292bda50920f53953161fa0c9a86596821ef86df04deef44138e1591716d52f37b13c1105fd2c781dd98061a42f0e7fa7201168b665abfc057e5881fc5eb69f67cd2bde171b4f6dfa74e4464a75ff7af6a902fbaefc758ff70438b04ea06db5452f97fbd24e3b3d0f81f3d5315643a4f6346fc55d67fd3ceaded26fa488d9c0bf547d15ca86a9c2f17cc870ba350a1ed99eb4ce960573abd196b41c8f0d25d282eddd588f21dc61c509489c8fed7c62cab84945a473ac6fc40fc33396a327faf17b005e4a407ec296213bb8755af9a88d5d6b00d00a6ca612f17a100f7a3cdd016c39b3baa35abb2211291ec9ee7b971279a25bbb8eef942f9988dc7f4e2e2d0af7f52c33364fafe22b349a472f90ed80df1a880a4de10f430d13db80c64f683bd94405817c11e659c01abc66c356dd2e3a7215c1354fcecf576734df94176350558172ec79d27d3b747475b3f4772e77a2d6a7646fccd57b2f3bc5776f4b0ec98639d8907d73295b983bdc1aeecbaa4147e4a274a03988e617885355feca1cb8c746c8376b07675419933078433e4659308976c904000dcff4b032b0589380d3994681ce4fa258d28ffd0671e0a283694c7560927029e566591517559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});