#!/bin/bash

# 设置Git配置以确保推送成功
git config --global http.sslVerify false
git config --global http.proxy ''
git config --global https.proxy ''
git config --global core.compression 0

# 执行推送
echo "正在推送更改到GitHub..."
git push

# 检查推送结果
if [ $? -eq 0 ]; then
    echo "推送成功！"
else
    echo "推送失败，请检查网络连接后重试。"
fi