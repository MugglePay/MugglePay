# 🇭🇰 MugglePay API 文档

简体中文 | [English](README.md)

[![](https://dcdn.mugglepay.com/dt/pay/logo/mplogo1.png)](https://www.mugglepay.com)

## 概述

欢迎使用 MugglePay！一个全面的加密货币支付解决方案，让商户能够以最少的集成工作接受加密支付。

## 快速开始

几分钟内即可开始使用 MugglePay API。请查看我们的[快速开始指南](faq/GetStarted.md)来开始构建您的集成。

<div align="center">

<img src="https://dcdn.mugglepay.com/dt/pay/docs/mp-create.png" alt="创建订单流程" width="400" style="margin: 20px 0;">

</div>

## 商户后台

通过[商户后台](https://merchants.mugglepay.com/)获取您的开发者 API 密钥并管理加密订单。

<div align="center">

<img src="https://dcdn.mugglepay.com/dt/pay/docs/mp-login.png" alt="商户登录" width="250" style="margin: 20px 0;">

</div>

## API 参考

### 核心概念
* [快速开始](faq/GetStarted.md) - 快速集成指南
* [API 概述](faq/Overview.md) - 了解 MugglePay 架构
* [订单状态](basic/OrderStatus.md) - 支付状态定义
* [错误代码](basic/ErrorCodes.md) - 常见错误处理
* [接口认证](basic/Authentication.md) - API 安全和令牌

### 支付操作
* [创建订单](order/CreateOrder.md) - 初始化支付请求
* [支付回调](order/PaymentCallback.md) - Webhook 通知
* [获取订单](order/GetOrder.md) - 检索订单详情
* [获取所有订单](order/GetOrders.md) - 列出所有订单
* [选择订单支付货币](order/CheckoutOrder.md) - 选择支付货币
* [取消订单](order/CancelOrder.md) - 取消待处理订单
* [退款](order/Refund.md) - 处理退款

### 支持与资源
* [用户常见问题](faq/CustomerFAQ.md) - 常见用户问题
* [商户常见问题](faq/MerchantFAQ.md) - 集成故障排除
* [自托管解决方案](self-managed-non-custodian.md) - 高级部署选项

<div align="center">

<img src="https://dcdn.mugglepay.com/dt/pay/docs/mp-payment.png" alt="支付流程" width="250" style="margin: 20px 0;">

</div>

## 下一步

1. **阅读[快速开始指南](faq/GetStarted.md)** 了解集成流程
2. **设置您的[商户账户](https://merchants.mugglepay.com/)** 获取 API 密钥
3. **查看[接口认证](basic/Authentication.md)** 确保 API 调用安全
4. **使用[创建订单](order/CreateOrder.md)** 测试构建您的第一个支付流程

## 版权

[BSD](https://www.wikiwand.com/en/BSD_licenses) Copyright (c) 2018-present, Muggles. 保留所有权利。
