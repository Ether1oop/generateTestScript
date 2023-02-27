const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("CoinTool_App",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("CoinTool_App");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy();
		return {_contract,account0,account1,account2};
	}

	describe("f",function(){
		it("testing f",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).f(["0x04f5","0x04f6","0x04f7","0x04f8","0x04f9","0x04fa","0x04fb","0x04fc","0x04fd","0x04fe","0x04ff","0x0500","0x0501","0x0502","0x0503","0x0504","0x0505","0x0506","0x0507","0x0508","0x0509","0x050a","0x050b","0x050c","0x050d","0x050e","0x050f","0x0510","0x0511","0x0512","0x0513","0x0514","0x0515","0x0516","0x0517","0x0518","0x0519","0x051a","0x051b","0x051c","0x051d","0x051e","0x051f","0x0520","0x0521","0x0522","0x0523","0x0524","0x0525","0x0526","0x0527","0x0528","0x0529","0x052a","0x052b","0x052c","0x052d","0x052e","0x052f","0x0530","0x0531","0x0532","0x0533","0x0534","0x0535","0x0536","0x0537","0x0538","0x0539","0x053a","0x053b","0x053c","0x053d","0x053e","0x053f","0x0540","0x0541","0x0542","0x0543","0x0544","0x0545","0x0546","0x0547","0x0548","0x0549","0x054a","0x054b","0x054c","0x054d","0x054e","0x054f","0x0550","0x0551","0x0552","0x0553","0x0554","0x0555","0x0556","0x0557","0x0558","0x0559","0x055a","0x055b","0x055c","0x055d","0x055e","0x055f","0x0560","0x0561","0x0562","0x0563","0x0564","0x0565","0x0566","0x0567","0x0568","0x0569","0x056a","0x056b","0x056c","0x056d","0x056e","0x056f","0x0570","0x0571","0x0572","0x0573","0x0574"],"0x59635f6f00000000000000000000000006450dee7fd2fb8e39061434babcfc05599a6fb8000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000249ff054df000000000000000000000000000000000000000000000000000000000000001300000000000000000000000000000000000000000000000000000000","0x01");
		});
	});
});