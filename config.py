import json
import os
import re
import shutil
import subprocess
import OpenFile

path = "/home/yantong/Code/ScapyEtherscan/convertFileToPart"
hardhat_workingspace = "/home/yantong/Code/hardhatTest"
origin_path = os.getcwd()


def deleteDirFiles(dir_path):
    for filename in os.listdir(dir_path):
        file_path = os.path.join(dir_path, filename)
        if os.path.isfile(file_path):
            os.remove(file_path)


def copyFile(dirname):
    deleteDirFiles(hardhat_workingspace + "/contracts")
    filename = os.listdir(path + "/sol_contents/" + dirname)[0]
    os.system("cp " + path + "/sol_contents/" + dirname + "/" + filename + " /home/yantong/Code/hardhatTest/contracts/" + filename)
    return filename


def collectMessage(jsonStr):
    jsonStr = json.loads(jsonStr)
    result = []

    for j in range(0, len(jsonStr['types'])):
        types = jsonStr['types'][j]
        _input = jsonStr['inputs'][j]
        if types == 'address':
            if _input.find("0x") == -1:
                result.append("\"0x" + _input + "\"")
            else:
                result.append("\"" + _input + "\"")
        elif types.find("uint") != -1:
            if types.find("[") == -1:
                if isinstance(_input,dict):
                    result.append("\"" + _input['hex'] + "\"")
                else:
                    result.append("\"" + str(_input) + "\"")
            else:
                tmp = []
                for it in _input:
                    if isinstance(it,dict):
                        tmp.append("\"" + it['hex'] + "\"")
                    else:
                        tmp.append("\"" + str(_input) + "\"")
                result.append("[" + ",".join(tmp) + "]")
        elif types.find("[") != -1:
            tmp = []
            for it in _input:
                if isinstance(it,bool):
                    tmp.append(str(int(it)))
                else:
                    if isinstance(it,list):
                        if len(it) == 0:
                            tmp.append("[]")
                        else:
                            tmp.append(str(it))
                    else:
                        tmp.append("\"" + it + "\"")
            result.append("[" + ",".join(tmp) + "]")
        elif types == "bool":
            result.append(str(int(_input)))
        else:
            if isinstance(_input,dict):
                result.append("\"" + _input['hex'] + "\"")
            elif isinstance(_input,list):
                _input = [f'"{item}"' for item in _input]
                result.append("[" + ",".join(_input) + "]")
            else:
                result.append("\"" + _input + "\"")
    return ",".join(result)


def collectConstructorArgument(jsonStr):
    jsonStr = json.loads(jsonStr)
    result = []
    if '__length__' not in jsonStr:
        print(json.dumps(jsonStr))
        return ""
    length = jsonStr['__length__']
    for j in range(0, int(length)):
        if isinstance(jsonStr[str(j)], list):
            jsonStr[str(j)] = [f'"{item}"' for item in jsonStr[str(j)]]
            result.append("[" + ",".join(jsonStr[str(j)]) + "]")
        elif isinstance(jsonStr[str(j)],bool):
            result.append(str(int(jsonStr[str(j)])))
        else:
            if jsonStr[str(j)] is None:
                result.append("\"\"")
            else:
                result.append("\"" + jsonStr[str(j)] + "\"")
    result = ",".join(result)
    return result


def generateScript():
    result = "const {{expect}} = require(\"""chai\""");\n" \
             "const {{loadFixture}} = require(\"""@nomicfoundation/hardhat-network-helpers\""");\n" \
             "const web3 = require(\"""web3\""");\n\n" \
             "describe(\"""{contract_name}\""",function(){{\n"
    result += "\tasync function deployOneYearLockFixture(){{\n" \
              "\t\tconst _Contract = await ethers.getContractFactory(\"""{contract_name}\""");\n" \
              "\t\tconst [account0,account1,account2] = await ethers.getSigners();\n" \
              "\t\tconst _contract = await _Contract.deploy({constructor_argument});\n" \
              "\t\treturn {{_contract,account0,account1,account2}};" \
              "\n\t}}\n\n"
    result += "\tdescribe(\"{function_name}\",function(){{\n" \
              "\t\tit(\"""testing {function_name}\""",async function(){{\n" \
              "\t\t\tconst {{_contract,account0,account1,account2}} = await loadFixture(deployOneYearLockFixture);\n" \
              "\t\t\tawait _contract.connect({account}).{function_name}({contract_input});\n" \
              "\t\t}});\n" \
              "\t}});\n" \
              "}});"

    return result


def modifyHardhatConfig(compile_version):
    config_str = OpenFile.openFileByString(hardhat_workingspace + "/hardhat.config.js")
    pattern = r'(?<=\{version:")[0-9.]+(?="})'
    # 用新的版本号替换旧的版本号
    config_str = re.sub(pattern, compile_version, config_str)
    return config_str


def testCollectMessage(dirname):
    # constructor_argument = OpenFile.openFileByString(path + "/other_contents/" + dirname + "/constructor_arguments.json")
    # print(constructor_argument)
    # constructor_inputs = collectConstructorArgument(constructor_argument)
    # print(constructor_inputs)

    # file_input_list = os.listdir(path + "/input_content/" + dirname)
    # for input_info in file_input_list:
    #     input_info = OpenFile.openFileByString(path + "/input_content/" + dirname + "/" + input_info)
    #     print(input_info)
    #     input_info = collectMessage(input_info)
    #     print(input_info)
    compile_version = OpenFile.openFileByString(path + "/other_contents/" + dirname + "/compile_version.txt")
    print(compile_version)

    pattern = re.compile(r'v(\d+\.\d+\.\d+)')
    compile_version = [m.group(1) for m in pattern.finditer(compile_version)]
    if len(compile_version) != 0:
        print(compile_version[0])
    # print(compile_version)
    # compile_version = compile_version.split("+")[0][1:]


def init(dirname):
    deleteDirFiles(hardhat_workingspace + "/test")
    # 读取构造函数信息以及编译器版本信息
    compile_version = OpenFile.openFileByString(path + "/other_contents/" + dirname + "/compile_version.txt")
    constructor_argument = OpenFile.openFileByString(path + "/other_contents/" + dirname + "/constructor_arguments.json")
    pattern = re.compile(r'v(\d+\.\d+\.\d+)')
    compile_version = [m.group(1) for m in pattern.finditer(compile_version)]
    if len(compile_version) == 0:
        return 0
    compile_version = compile_version[0]
    constructor_inputs = collectConstructorArgument(constructor_argument)
    # 修改hardhat.config
    config_file = modifyHardhatConfig(compile_version)
    OpenFile.writeFile(hardhat_workingspace + "/hardhat.config.js",config_file)
    # 读取输入
    filename = os.listdir(path + "/sol_contents/" + dirname)[0]
    file_input_list = os.listdir(path + "/input_content/" + dirname)
    for input_info in file_input_list:
        id = file_input_list.index(input_info)
        input_info = OpenFile.openFileByString(path + "/input_content/" + dirname + "/" + input_info)
        if input_info == '{"method": null, "types": [], "inputs": [], "names": []}':
            continue
        function_name = json.loads(input_info)['method']
        if function_name is None:
            continue
        input_info = collectMessage(input_info)
        # 根据构造函数输入以及读取的输入生成测试脚本

        scriptStr = generateScript().format(contract_name=filename[:-4],
                                            constructor_argument=constructor_inputs,
                                            function_name=function_name,
                                            contract_input=input_info,
                                            account = "account0")
                                            # account="account" + str(random.randint(0,10)))
        OpenFile.writeFile("/home/yantong/Code/hardhatTest/test/" + filename[:-4] + "_" + function_name + "_" + str(id) + ".js", scriptStr)
        # print(scriptStr)
    # print("s")

# collectMessage(OpenFile.openFileByString(path+"/input_content/0x0a16305612706b4eabce43247d61fe7fbed708e4/1.json"))
# tmpStr = OpenFile.openFileByString(path + "/other_contents/0x0a6d448547c6da0ed11e10a2358ee0b4f20a8a28/constructor_arguments.json")
def copyAtoB(src_folder,dst_folder):
    # 遍历A文件夹中的所有文件和子文件夹
    for root, dirs, files in os.walk(src_folder):
        # 遍历当前目录下的文件
        for _file in files:
            # 源文件路径
            src_file_path = os.path.join(root, _file)
            # 目标文件路径
            dst_file_path = os.path.join(dst_folder, _file)
            # 拷贝文件到目标文件夹
            shutil.copy(src_file_path, dst_file_path)


def execCommand(sha):
    os.chdir(hardhat_workingspace)
    # 执行命令
    ret = subprocess.run("npx hardhat coverage --temp build",shell=True,stdout=subprocess.PIPE,stderr=subprocess.PIPE,encoding="utf-8")
    matches = re.findall(r"✔\s+testing\s+(\S+)\s+\((\d+)ms\)", ret.stdout)
    for match in matches:
        if not os.path.exists(origin_path + "/test suite/" + sha):
            os.mkdir(origin_path + "/test suite/" + sha)
        copyAtoB(hardhat_workingspace + "/contracts", origin_path + "/test suite/" + sha)
        file_list = os.listdir(hardhat_workingspace + "/test")
        for _item in file_list:
            if _item.find(match[0]) != -1:
                shutil.copy(hardhat_workingspace + "/test/" + _item, origin_path + "/test suite/" + sha + "/" + _item)
    # print(ret.stdout)


if __name__ == "__main__":

    with open("waitingList.txt", "r") as file:
        dirlist = file.read().split("\n")[:-1]

    for i in range(1114,len(dirlist)):
        item = dirlist[i]
        print(str(i))
        # testCollectMessage(dirlist[i])
        copyFile(item)
        init(item)
        execCommand(item)