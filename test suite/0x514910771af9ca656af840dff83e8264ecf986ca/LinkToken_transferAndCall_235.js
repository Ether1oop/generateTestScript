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
			await _contract.connect(account0).transferAndCall("0x3feB1e09b4bb0E7f0387CeE092a52e85797ab889","0xdf83fd1e8937b000","0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000012149f8a57f234fd8d4139505f0dfaff2f98df13cc757ef0b46dd641e5bdbc6c2d234e132213e74a7e02a71587bc09b97c4323e72982f066ebf1ec4aa59b563663dd3ca227027932fc5bc8333cc6d4e7bac46d1e31d6af200a8d826d8c8069c07d6f00e6d89ebf995f4d817ad112d91f916dcd85bb366516d6bad93c5c6aec2b7e4f2328dfa755cb8a7e5b5effe85e19e78b39587f72ea1ddb17abb6fbd4d0f6432bc1dc8431ba05c7240a2c2bd9e0916ffdc9d9a7f447dcc663bd8cdfcdf4b83cac201f53328895cda818dd507ada80570cd337e7191e136ba88e7d8dbeaa8f7565afea684131f868d73cc39c7645be655beac0934fa060659ec787d6f4c0d302634ade11d2748cb27b60b721ee8321ae6d4e54e79e0a83e674b56a440a318d31debfa9f98e02a39f01d01127c5cfef7821f02ff9cb93e7ba18bca5decdc9118a6d0a5d702cdf1586779c3f350e59ae67a5f546ce87fdefc1ea44051662bc8ece859174f5f3b30af0e04699d40587fed5eb0abbe9c7938089493664ce820427af0c729749855f40a82ee057dc7c803ba18fda6013d27429db8ddd96d6c5126a48c4dc0e8a6b51312d2d51a279e11eb420242be70c91b1de3a7236d452721a1dd3dde0155729bc57709d38c8d2ec605ee2782e258f7c6e2a21b2319afc50180ba26b1c013d0b5cecb8df3f1a6fc556f5fe66de0c4d1cd8b0a82256262fd793cf2fe5d75c9c979034cff1617053d09a2eaa7d34b9b8dea9ca2f23162097678c53127506d9ddfae316f5b789d9d9ff6b6115cd94f09d0ad699ff69fb2644cae4bc57");
		});
	});
});