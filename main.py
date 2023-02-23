import os

path = "/home/yantong/Code/ScapyEtherscan/convertFileToPart"

dirlist = os.listdir(path + "/sol_contents")

count = 0

for item in dirlist:
    filelist = os.listdir(path + "/sol_contents/" + item)
    if len(filelist) == 1 and os.path.isfile(path + "/sol_contents/" + item + "/" + filelist[0]):
        with open("waitingList.txt","a")as file:
            file.write(item + "\n")
        count += 1
print(count)