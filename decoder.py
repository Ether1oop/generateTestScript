import web3
import json

from web3 import Web3

import OpenFile

path = "/home/yantong/Code/ScapyEtherscan"
filename = '0x0000000005756b5a03e751bd0280e3a55bc05b6e'

jsonStr = OpenFile.openFileByString(path + "/sol_code/" + filename + ".json")
jsonStr = json.loads(jsonStr)

abi = jsonStr['result'][0]['ABI']
constructor_arguments = jsonStr['result'][0]['ConstructorArguments']
abi = json.loads(abi)
for item in abi:
    if item['type'] == 'constructor':
        constructor_abi = item
        break



web = Web3()

constructor = web.eth.contract(abi = constructor_abi)
result = constructor.decode_function_input(constructor_arguments)


print("s")