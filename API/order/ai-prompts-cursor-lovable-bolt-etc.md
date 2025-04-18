# AI Prompts (Cursor, Lovable, Bolt etc)

### Before Start

1. Register account with email / web3 address from [https://merchants.mugglepay.com/](https://merchants.mugglepay.com/)
2. Get server API Keys&#x20;

### Prompts for AI:

Create Order with the price

```
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'content-type: application/json' \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL' \
  -d '{
  "merchant_order_id": 100388,
  "title": "Grand AI Services fee",
  "price_amount": 10,
  "price_currency": "USD"
}'    

```

```
Response Format 

{
    "status": 201,
    "order": {
    },
    "payment_url": "https://invoice.mugglepay.com/invoices?id=94be2b2a-2905-4857-b701-b04e57e84593"
}
```

Redirect the page to the payment\_url. If the user finishes payments, it will shows the payment success.



### Advanced Prompts for AI:

If you are familar with the callback, add the callback\_url&#x20;

```
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'content-type: application/json' \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL' \
  -d '{
     merchant_order_id: '503a854998-6230-4338-adb7',
     title: "Monthly Program x 1",
     description: "Gaming for your family",
     price_amount: 1,
     price_currency: 'USD',
     pay_currency: 'USDT_ARBI',
     callback_url: "https://ecards.com/api/success",
     cancel_url: "https://ecards.com/ecardstatus?status=cancel",
     success_url: "https://ecards.com/ecardstatus?status=success",
}'

```

For the supported tokens:

&#x20;it's the field **pay\_currency. pay\_currency** is optinal. If it's not set, user can select manually. Here are the supported pay\_currency, and we support most of the stablecoins like USDT, USDC on Arbitrum, Solana, Base\
https://docs.mugglepay.com/order/createorder

For the callback:

If the payment is success, it will trigger a callback to your callback\_url with the body info. Check this callback doc for more.

[https://docs.mugglepay.com/order/paymentcallback](https://docs.mugglepay.com/order/paymentcallback)







