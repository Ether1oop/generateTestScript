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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x1b1ae4d6e2ef500000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012bce4c115588a11e3596d5eaa0c6f7ed6b75427c76ea9cc3e1aacfab5b19dd895646f9b8932730e043b9a3c4305351a36f85721d0c7389cf3cb71b87c5e25977e5f372bb377bb71b1ab980bcbe45788f24cf6ae03e80561f098d123802a43026d4b9e6afaade10dd9692e5c6792692abacdaa6a2b9f9ff29b22042ba4670111ceb7769bebb393beb3e2073d9fca232efea3bba2a138fefd0cdf5ecdf43abb89a38c5eb1b49562b906fa105c84387d26659a094f52f858cf379f7b42507a83609f8531a51a24117f8522f3ee922979ee6e626d08050d998c7c0ab8ec4bf77623db6107df140b050fd294a1b09b5b726585262973ed5172c3a9d838e771e219cd592728abc0cbae915580c57713f75d25cf94cad9c9c307a432d9bcc5a09565106642a02de6b88745b2481493db88681e6dd3b07185af09d1494a5e202b30cd750b25eb5f6f1197f39edf93458841532556d5e70784abedae2b7b87d4abd021cff8859ab6ace40f168f9c6ba680b70c911522a726255a2e19757acea50f85508d35a1b26486d553f09a949fa8b24618f76dd866468c9c57feea2ea4bd803186a5b9db5a9accc4ea04d588389b50fa4dd875095e37cde693141ea48bea14339f7a04c6ecc51b7cb81723c6467684afe6a050fff25898d6f490aa1fb53987ab1d710fe3879df8b2d6096ec0846fbcb2edf48f8373d0e162630899e81cb563d937826317559309d370792985a4d8cff68f325f8bc0d3937cbe88493fd4fea880e1ac9082fc15a13cc3279756a24d09b2cc8ed69479e69e82fceb06c7e858434f54ece8");
		});
	});
});