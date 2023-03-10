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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0x0a4cc799563c380000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012c2f633e22ba68d9dc366b4fd2fd6e8796c535595e78ddee3444678bc207516d636e716907cf478b1cf65878aa803552ca85b84ab6860e4166560b6ca552e3bfcdf959e3bea5ea952f46892c12b8e015d3672fdb1374d7a7e247327fda8ed9e6000213b284766795d79d201fd23f4d3c66beee00440e3bb9624cd32a75082dcaa87e8ce1705e6b222d88b2978329a36764685f3abc111b15c14407472a0413f8058f1459bdf756ce9ec987a9b672e1b1853c4474edb79d29a8b7212b76bf7ef27b0104ed37d0b4da743ca14ab30cf8201ac98e38c1033c686a47b5d2f95a85fa4892cd764e90f1e5c25cdde80b7a5b7f05f435852b29e682e0a5c0b67fa54b91dd53da6c85d721a5761689ff6cde93bdf4e4ce6b59f78d44e00d70423482a21da9dc3012ab25ce9c900d27a18d7c6cd28f54c042645cb2e216cc5e541eb149dc4f9b09c37042b95f9b87eca3e915e599d2147b04500552ab8874af17423683c2869be63b7f374905e825682bc48356b271c243c637e0b86cdbc1d6e8115b6c54f5dd15a2645c87ede1b2b7bfa215d27914f263ed96d9ef58555427440ec8acf0ad4a9862f92cb1623f3e4c7f412b2b7e4d4a8d4af38296ee90114ae2fa175ab6a8ddccc582bcdf03ca2e61cbe5399da4760f928cf708ddde770ccfb9063e3a52295b57c1dd58ecf97866eb5df491ab02d830b5e5a5221efcf60cfb9ec0f079e4842eafdff4dad0f0e7ad7ce38fa991536f15cfdb232c5398b494264cdb87ba58d7506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});