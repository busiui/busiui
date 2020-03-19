# 初始化本地仓库
git init 
# 关联远程仓库
git remote add origin https://github.com/busiui/busiui
# 所有变化提交到暂存区
git add .
# 将暂存区里的改动给提交到本地的版本库
git commit -m 'init'

# 直接push到主分支
git push origin master
