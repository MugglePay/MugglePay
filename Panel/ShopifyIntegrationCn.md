# Shopify与MugglePay集成

更新于2023年12月30日

这些步骤详细介绍了如何在Shopify上设置MugglePay，您可以在YouTube上查看整个过程。

[在YouTube上观看教程](https://www.youtube.com/watch?v=UR33BRHb0y8)

## 2. 进入您的Shopify门户
- 点击“设置”
  ![图像](https://github.com/MugglePay/MugglePay/assets/1627446/a955b550-fc09-4c3b-b7ca-64d006d6d70a)
    
- 点击“应用和销售渠道”，然后点击“开发应用”
    ![图像](https://github.com/MugglePay/MugglePay/assets/1627446/31c97cfa-9cb8-4ec8-a9e1-3013e868ee39)

    
- 点击“创建应用”，命名为“Muggles”，然后点击创建。
    ![图像](https://github.com/MugglePay/MugglePay/assets/1627446/d090db43-e10d-4570-b115-edce7e05661a)

    
- 在“配置”选项卡中，选择“管理员API集成”。为订单和草稿订单授予“读取和写入”权限，然后点击“保存”（write_draft_orders, read_draft_orders, write_orders, read_orders）
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/df15d964-eaf8-4cbf-92fd-fed9906a12c2)


- 转到API凭据选项卡，点击“安装应用”。
- “安装应用”后，点击API凭据，复制这两个字段。
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/2bdfab7b-8a35-4a09-ae76-be9ef7c2c057)

## 3. 进入您的MugglePay账户。
- 点击菜单栏 > 开发者中心 > Shopify设置
- 使用API凭据选项卡中的信息填写字段
    - 访问令牌为 [443a94-2](http://443a94-2.myshopify.com/)
    - Shopify App管理员API访问令牌：shpat_*******
- 点击“连接到Shopify”
    - MugglePay将显示您的Shopify商店的代码列表。
- 复制脚本
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/7ce1106e-9bbc-40c4-9fac-4458508a9e20)

## 4. 返回到您的Shopify账户。
- 进入您的Shopify设置 > 结账
    ![图像](https://github.com/MugglePay/MugglePay/assets/1627446/4e00773b-f239-4b25-964a-062855000803)

    
- 在结账中，找到订单处理 > 附加脚本，并粘贴脚本
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/b48b4b49-a3ce-4360-a155-ed9ad236d71b)


## 5. 通过MugglePay添加加密货币支付
- 点击“设置 → 支付”
        ![图像](https://github.com/MugglePay/MugglePay/assets/1627446/0af74ee3-0220-4b07-a7da-69994ad31963)

    
- 在“手动支付方式”中，点击“添加手动支付方式”
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/7918f999-3c99-4c3b-b59b-4b4b579d8888)

    
- 添加一个名为“加密货币支付 - MugglePay”的名称
![图像](https://github.com/MugglePay/MugglePay/assets/1627446/d12a49bb-0ffa-4308-bcf5-4c5d11611143)


## 6. 成功！您的客户现在可以使用加密货币进行支付了！
