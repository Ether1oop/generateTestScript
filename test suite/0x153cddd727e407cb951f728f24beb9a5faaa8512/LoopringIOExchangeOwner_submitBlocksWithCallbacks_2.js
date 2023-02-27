const {expect} = require("chai");
const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const web3 = require("web3");

describe("LoopringIOExchangeOwner",function(){
	async function deployOneYearLockFixture(){
		const _Contract = await ethers.getContractFactory("LoopringIOExchangeOwner");
		const [account0,account1,account2] = await ethers.getSigners();
		const _contract = await _Contract.deploy("0x0BABA1Ad5bE3a5C0a66E7ac838a129Bf948f1eA4");
		return {_contract,account0,account1,account2};
	}

	describe("submitBlocksWithCallbacks",function(){
		it("testing submitBlocksWithCallbacks",async function(){
			const {_contract,account0,account1,account2} = await loadFixture(deployOneYearLockFixture);
			await _contract.connect(account0).submitBlocksWithCallbacks(0,"0x5322843000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000001e02e2044afd96055c70b042e69aec04cdaca6e42b2dc6e87956b589d9cdd6ba1cc2fa9f36300a39f97e63351791282f061f28d332ca7c08d6d9347a36c05b20a030b23cd83c1699f4dec74d389cbb2bf791a311a8e8488c2fbbd11e8090aa952aa2ee149f384d3687146a82d56d98d5e4e56dccce041799bfd2a542577cb2f33e22a422a7d4788405a59294e30e62efd9ca01ac3d11672ee134fd260fac65aa9181d5fb021688c33bd966301b7f33a65b27df42af3fd71b8eafeab105edd5f461c19740b9bd64d4f9a5a9e369dae728e98f3fb5e84da1208c899d38efdba60be3e08d6ca4669761eefbcee9d4a58a6afd1aac8563f0c1cc36f9e9169a98550fb9100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002480000000000000000000000000000000000000000000000000000000000000302000000000000000000000000000000000000000000000000000000000000022620baba1ad5be3a5c0a66e7ac838a129bf948f1ea40e7d9f6060f33c66ae1291974968ec723e01d3c4d7aa565a6bce49ffc083d8c927509a4e631b85d0b3312174d1e43ba2e50f83faf1af64417a8dffe76a1d6242639193ed0000000000090000271104000487c4000b575700008b7700000001000000016189957fc64e0a0004000487c6000b575800008b770000000100000001662682831c150a000400038838000a98bf00008b770000006c000600011b99e6817b220a0003000000e8790002baab8016000001000053b60000000100000000000003000000e8790002baab8015000001000053b60000000100000000000003000000e8790002baab8010000001000053b6000000010000000000000300000082ea0001826500005de3ad0000541500014fe300000000000004000487c8000b575900008b7700000001000000016189ce7fc6c90a0004000487ca000b575a00008b770000000100000001662767831c470a00040003883a000a98c000008b770000006c000600011b90c58177330a0004000487cc000b575b00008b770000000100000001618a0a7fc7540a0004000405ae0000f30000008b7700000059000100b681ef3f79553b0a0004000487ce000b575c00008b770000000100000001618a167fc7700a0003000001c5a20002004400ff7fa12000005415000000050000000000000400000d16000000000001ecf80002ee99000080945b0d400000018814040000023c000001040002ce0d00020b9a000081085b0d4000000188140300000260470002ee990000530d4000000000000b79810000000000000300000260470002b9550000530d4000000000000b798300000000000004000386d0000a98c1000063550000006c0006000120ef2c83d64a0a0004000487d0000b575d00008b770000000100000001631446818e4c0a0004000487d2000b575e00008b770000000100000001693b638639130a00040001617e000090a7000056f7000000790006010419e06b7b38420a000300000082ea000288de000061339e0000541500014fe5000000000000040001156c000a98c200009f200000006c0006000119e42d7fc30c0a0003000000fb600001931400005e1a80000054150000010d0000000000000400027c5c000a98c30001172c0000006c0006000119e3087fbdda0a00020013bbb97316aa69c84e004dda69dd9b8ab94b96ef0000a8e100000004000386d2000a98c4000063550000006c0006000121096a8440180a00040001cc74000a98c50000dd9e0000006c000600011fa02e831f5c0a00040000b01a00049d1b000056f70000000f0003000119e1d87fb61a0a000618920d6e6fb7ebe057a4dd9260d6d95845c9503600000001000114000618920d6e6fb7ebe057a4dd9260d6d95845c950360000000100001400070b1004c7f424c02c471a391554c52fcf2a3247370000e97c1429e5ca03010000e97c000000010053192e6e000000000000004318920d6e6fb70301000000010000e97c000175207500000000000b575f0b1004c7f4240301000000010000e97c000058dd4b000063cf000b57600b1004c7f42404000002e0000b57610000e97c000000010001000075091058fe3e3000010e420679ae005b02ce9e46578b61f5c7f093cd6300011dee000100000400030d040000f301000056f700000059000100b67fb2a27548b20a000300000378f70000c8db0000655730000053cf0000000100000000000002000b1004c7f424c02c471a391554c52fcf2a3247370000e97c000000030000011dee00007fa000005444ba00000000000000010000000000000300000082ea0002023c000065a5f6000053cf00014fe700000000000004000001b2000004e0000287da0001fee90000818963e4180000018814040001cf3e0000f30200009f2000000059000100b6820e477967d60a0003000000ce5d0002dd72855c000001000053760000000300000000000003000000c8db000378f78087000001000053760000000100000000000004000000e00000072a0001664f0001b5fd00008338561a80000001a41408000001199a8330000179920000000000000000000000320000015b0004000001de00003c5c0002023c0002d9b20000808364c6a8000001881403000002023c0002cd1c8045000001000053760000000500000000000004000001b400000350000287da0000e21f0000806160f424000001881404000001b600000238000287da000264ce0000838e61093c00000188140300000260470002ad7700005be41800000000000b79850000000000000300000260470001693d00004e1a8000000000000b79870000000000000300000260470002ad77000058f42400000000000b79890000000000000300000260470001693d00005cc6a800000000000b798b0000000000000300000260470002ad77000059093c00000000000b798d00000000000004000052060000f30300008b770000005900b6000179089c8181bf0a0003000002cc48000081fd000600385800060cb200000acd0000000000000300000081fd0002cc4700207d3bb300060cb200000009000000000000040000018800064e31000102840000001600060000257b246c70a70a000400000366000b57620001c07c00000001000100008986a06b01f30a00040004d382000b57630000635500000001000000016b33f5899e500a0004000001b8000002f2000287da00020c0e000085cc60f99c00000188140300000260470002ad77000058f99c00000000000b798f0000000000000400011cfc00065d7400008b77000000040003000019e41f6188bc0a0004000000fa000b57640000834200000001000100007c93e060e7251e00040000010a00000000000083420002c9020000820e5c93e000000188140300000260470002c90200005493e000000000000b7991000000000000040001156e000a98c600009f200000006c000600012122fd84a6020a000400000368000b57650001c07c00000001000100008986a06b01fb0a00040004d384000b57660000635500000001000000016bb85989e1230a000300000090ba000099220000613c7b000053cf0000b4ab00000000000004000056320000f304000056f70000005900b60001754e087fb57c0a0001af3c77905cacebdce2e4f6a9f807d762163916760003a41400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800900000000000000000000000000000000000000000000000000000000000000000000000000800a00000000000000000000000000000000000000000000000000000000000000000000000000800b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000087ff000003140000000000000000000000000000000000000000000000000000000000000000008141000003140000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000309a74b96e2a000000068d10000002f46802beffa92b30b101c276e02f2fe977c1c36c200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000f42400000b734000d0f99fd4295bea42a140000000000000000000000000000000000000000000f42400000b735000000a92992db7c19fa83a0000000000000000000000000cd65a6c30731c37883015d900ec49922b39d9a8a526ef38bfdb26a6a0000000000000000000000ebe057a4dd9260d6d95845c950360b1004c7f424c02c471a391554c52fcf2a3247370000000000c02c471a391554c52fcf2a32473718920d6e6fb7ebe057a4dd9260d6d95845c950360000000000c02c471a391554c52fcf2a32473718920d6e6fb7ebe057a4dd9260d6d95845c9503600000000000000000001000000000000000000000000000000000000000000000000000000000000000000000022de559bc1012f9a2e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000240f3152e2e8000000679f0000026d219c937a7edcd2e4ef347b4c94bfcb33305d73df00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080b10000031400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000803400000000000000000000000000000000000000000000000000000000000000000000000000800d00000080510000041400000000000000000000000000000000000000000000000000000000000000000000025b0a44c59a08406aa1c0e10c5efe2742f99918ff2c3fc5247ef9a2f3cd468f1a930a0a000080450000031400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000800600000080b20000031400000000000000000000000000000000000000000000000000000000000000000080b30000031400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000080b40000031400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000083dc00000314000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c9ae8f1c77a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b8000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000009000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000006200000000000000000000000000000000000000000000000000000000000000740000000000000000000000000000000000000000000000000000000000000086000000000000000000000000000000000000000000000000000000000000008e00000000000000000000000000000000000000000000000000000000000000ac0000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014c080000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000013bbb97316aa69c84e004dda69dd9b8ab94b96ef000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000076cd80b94a0000000000000000000000000000000000000000000000000000000000066235b2f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000ffffffff0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001f0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000800000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000210000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000230000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000376c1e0a7f00000000000000000000000000000000000000000000000000000000000ffffffff000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000028000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000014c0800000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000ac1807ff2f5627b9652f340daefa6f309839f87300000000000000000000000000000000000000000000000000000000000001200000000000000000000000000000000000000000000000000006ee6c95f4f0000000000000000000000000000000000000000000000000000000000063e0a96300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",[[[0, [[30, 6, 0, '0x00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000014000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000b1004c7f424c02c471a391554c52fcf2a32473700000000000000000000000000000000000000000000000000000000049d5ef0000000000000000000000000000000000000000000000000000000000000004300000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000376c1e0a7f0000000000000000000000000000000000000000000000000000000000063e0a92a0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000001d1d041767fe580000000000000000000000000000000000000000000000000000017910acaa7300000000000000000000000000000000000000000000000000000000000000000011000000000000000000000000000000000000000000000000000000000000000']]]],['0x18920d6E6Fb7EbE057a4DD9260D6D95845c95036']]);
		});
	});
});