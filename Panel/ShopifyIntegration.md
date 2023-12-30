# Shopify Integration with MugglePay

Updated at Dec, 30th, 2023

These steps detail how to set up MugglePay payments on Shopify and enable customers to make purchases using cryptocurrency. Check the whole process in Youtube.

[Watch on YouTube](https://www.youtube.com/watch?v=UR33BRHb0y8)


## 2. Go to your Shopify Portal
- Click “Settings”
  ![image](https://github.com/MugglePay/MugglePay/assets/1627446/a955b550-fc09-4c3b-b7ca-64d006d6d70a)
    
- Click “Apps and Sales Channels”, and then click “Develop Apps”
    ![image](https://github.com/MugglePay/MugglePay/assets/1627446/31c97cfa-9cb8-4ec8-a9e1-3013e868ee39)

    
- Click “Create an App”, name it “Muggles”, and click Create.
    ![image](https://github.com/MugglePay/MugglePay/assets/1627446/d090db43-e10d-4570-b115-edce7e05661a)

    
- In Configuration tab, choose “Admin API integration”. Give a “Read and Write” permission to Orders and Draft orders and click “Save” (write_draft_orders,read_draft_orders,write_orders,read_orders)
![image](https://github.com/MugglePay/MugglePay/assets/1627446/df15d964-eaf8-4cbf-92fd-fed9906a12c2)


- Go to the API credentials tab and press “Install app“.
- After “Install app’, click API credentials, and copy those two fields.
![image](https://github.com/MugglePay/MugglePay/assets/1627446/2bdfab7b-8a35-4a09-ae76-be9ef7c2c057)

## 3. Go to your MugglePay Account.
- Click the menu bar > Developer Center  > Shopify Settings
- fill the fields using the info from the API credentials tab
    - access token is [443a94-2](http://443a94-2.myshopify.com/)
    - Shopify App Admin API access token: shpat_*******
- Click “Connect to Shopify”
    - MugglePay will show the list of code for your Shopify store.
- Copy the scripts
![image](https://github.com/MugglePay/MugglePay/assets/1627446/7ce1106e-9bbc-40c4-9fac-4458508a9e20)

## 4. Go back to your Shopify Account.
- Go to your Shopify Settings > Checkout
    ![image](https://github.com/MugglePay/MugglePay/assets/1627446/4e00773b-f239-4b25-964a-062855000803)

    
- In the Checkout, find Order processing > Additional Scripts and paste the script
![image](https://github.com/MugglePay/MugglePay/assets/1627446/b48b4b49-a3ce-4360-a155-ed9ad236d71b)


## 5. Add Crypto payment via MugglePay
- Click “Settings → Payment”
        ![image](https://github.com/MugglePay/MugglePay/assets/1627446/0af74ee3-0220-4b07-a7da-69994ad31963)

    
- In “Manual payment methods”, click “Add manual payment method”
![image](https://github.com/MugglePay/MugglePay/assets/1627446/7918f999-3c99-4c3b-b59b-4b4b579d8888)

    
- Add a name “Pay in Crypto - MugglePay”
![image](https://github.com/MugglePay/MugglePay/assets/1627446/d12a49bb-0ffa-4308-bcf5-4c5d11611143)


## 6. Success! Your customer can now pay with crypto now!