const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("SetToken",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("SetToken");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy(["0x80fB784B7eD66730e8b1DBd9820aFD29931aab03","0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e","0xc00e94Cb662C3520282E6f5717214004A7f26888","0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F","0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2","0x408e41876cCCDC0F92210600ef50372656052a38","0xdd974D5C2e2928deA5F71b9825b8b646686BD200","0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD","0xba100000625a3754423978a60c9317c58a424e3D","0x221657776846890989a759BA2973e427DfF5C9bB"],["33272727272727272727","797848763334416","85350391885661595","3148584905660377358","23989250286527289","23814814814814814814","5186440677966101694","30833333333333333333","192345924453280318","107378129117259552"],["0x508910aA6fF3D029Dc358dD0f775877A355BA35B","0x3D8d14b7eFb8e342189ee14c3d40dCe005EB901B"],"0xF1B12A7b1f0AF744ED21eEC7d3E891C48Fd3c329","0x69Bdb276A17Dd90F9D3A545944CCB20E593ae8E3","DefiPulse Index","DPI");
		return {_contract,account0,account1,account2};
	}

	describe("approve",function(){
		it("testing approve",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).approve("0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9","0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
		});
	});
});