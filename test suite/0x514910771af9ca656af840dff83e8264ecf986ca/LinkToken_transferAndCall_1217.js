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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x878678326eac900000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012c5989e8c73a85e4e0ee3d969aa47de9bab7a0ecd9161b57bc338f52e5f64bc15f8a0eee00ee702850c62a57d01d9a3e573fb7d625bfb8cd6f859047cb6a5a6acbf7829c9aaafa14abc84aa01fa6bcf68d0a0f2bf9e903deb53aaa79f528dedd7dfbec30dfffc31824cef1fa07a7143a5125babe62c962e21408ad07b3840a96960f1b60aa8c541151e16b52772ee784735a865b987b7995ab43ceeaaa277be11be431eeebf18a84d85147a3e6476cab2a9a71054950e90a285fb869622b3e3525227bb99720699eaef458eee062f1cf8de86e55913ea452e6a6c3861ae523c30761746437144e50f1b77984cd6ddcf1261baa0df89942542a67cc00610f0f2d35dc56d36e0a5e79af64cf8b5fba5a777838d9f64ea41573f22849190a99f86fc8ebf02b9bbd9dff40672cc494256422aed9591e30919176677de86644dc11cf725eb5f6f1197f39edf93458841532556d5e70784abedae2b7b87d4abd021cff8859ab6ace40f168f9c6ba680b70c911522a726255a2e19757acea50f85508d35a1b26486d553f09a949fa8b24618f76dd866468c9c57feea2ea4bd803186a5b9db5a9accc4ea04d588389b50fa4dd875095e37cde693141ea48bea14339f7a04c6ecc51b7cb81723c6467684afe6a050fff25898d6f490aa1fb53987ab1d710fe3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});