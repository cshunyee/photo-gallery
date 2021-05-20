import os
arr = os.listdir('./image/')
img_list = []

for dir in arr:
    if dir.isdigit():
        img_list += [dir, '\n']
        files = os.listdir(f'./image/{dir}/')
        files.remove('.DS_Store')
        files.sort()
        img_list += files
        img_list.append('\n\n')

with open('img.txt', 'w') as file:
    for item in img_list:
        file.write(f'"{item}", ')
