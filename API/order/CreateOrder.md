# Create Order

When the customer clicks the 'Pay with Crypto' button, he/she is going to the Crypto payment page payment_url. Create Order API does two things.

Create Order API will do two things.
 * You need to provide basic payment info to display, including price_amount, title, description. e.g. 9.9 USD for the monthly membership.
 * You will have a payment_url page to direct the user. The page will contain the basic payment info.
 * You need to provide the success_url (when the payment succeeds, the user will be redirected there), and callback_url (we will tell the callback_url when the payments succeed).
 

This is the ONLY API needed for your website.

--------

## Definition
**POST** https://api.mugglepay.com/v1/orders

## Body Params

<table>
<thead>
	<tr>
	<th>Param</th>
	<th>Type</th>
	<th>Required</th>
	<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>merchant_order_id</td>
		<td><code>string</code></td>
		<td></td>
		<td>Merchant's custom order ID. We recommend using the orderID from your application. It's a unique order ID for your reference.</td>
	</tr>
	<tr>
		<td>price_amount</td>
		<td><code>double</code></td>
		<td>Yes</td>
		<td>The price set by the merchant. Example: 9.99</td>
	</tr>
	<tr>
		<td>price_currency</td>
		<td><code>string</code></td>
		<td>Yes</td>
		<td>The currency in which you wish to price your merchandise; used to define price parameter. Example: USD, CNY. Default USD</td>
	</tr>
	<tr>
		<td>pay_currency</td>
		<td><code>string</code></td>
		<td></td>
		<td>Only use this field if you have the payment gateway enabled, and it will select the payment gateway. e.g. ALIPAY, ALIGLOBAL, WECHAT, BTC, LTC, ETH, EOS, BCH, LBTC (LBTC stands for Lightening BTC)</td>
	</tr>
	<tr>
		<td>title</td>
		<td><code>string</code></td>
		<td></td>
		<td>Max 200 characters. Example: product title (Apple iPhone X), order id (OnlineStore Order #4321), cart id (Cart #00003552).</td>
	</tr>
	<tr>
		<td>description</td>
		<td><code>string</code></td>
		<td></td>
		<td>More details about this order. Max 800 characters. It can be cart items, product details or other information. Example: 1 x Apple iPhone X, 1 x Apple MacBook Air.</td>
	</tr>
	<tr>
		<td>callback_url</td>
		<td><code>string</code></td>
		<td></td>
		<td>Send an automated message to Merchant URL when order status is changed. For example, when the user finishes the payment, we will make a request with your token to callback_url. Example: http://onlinestore.com/payments/callback</td>
	</tr>
	<tr>
		<td>cancel_url</td>
		<td><code>string</code></td>
		<td></td>
		<td>Redirect to Merchant URL when the customer cancels the order. Example: http://onlinestore.com/cart</td>
	</tr>
	<tr>
		<td>success_url</td>
		<td><code>string</code></td>
		<td></td>
		<td>Redirect to Merchant URL after successful payment. Example: http://onlinestore.com/account/orders.</td>
	</tr>
	<tr>
		<td>mobile</td>
		<td><code>bool</code></td>
		<td></td>
		<td>Based on PC or Mobile Wap, we provide different links. 以支付宝为例，如果用户访问PC电脑，返回的链接是含有二维码的支付页面，如果用户用手机访问，返回链接会唤起支付宝。如果您在后台服务器发出请求，建议根据用户不同终端，传递此参数。</td>
	<tr>
		<td>fast</td>
		<td><code>bool</code></td>
		<td></td>
		<td>Return the payment url directly (Only for Alipay and AlipayGlobal). 如果设置此参数，payment_url将会是支付宝的付款链接，用户加快付款流程。如果是App中请求支付宝支付，建议mobile和fast均设为true，返回的链接会直接唤起支付宝。</td>
	</tr>
	<tr>
		<td>token</td>
		<td><code>string</code></td>
		<td></td>
		<td>Your custom token to validate Payment Callback. If it's provided, we will add it to the request of Payment Callback. 注意：比较容易混淆2个token，这里补充弄一下。（1）放在headers , 称为API_TOKEN_GET_FROM_ADMIN_PORTAL，通过商户后台获取，见下图。MugglePay知道改请求来自哪个商户。（2）这里的token是由商户平台产生的，这个来检验回调的真伪，例如用户支付成功，MugglePay会给商户回调地址发通知，但是可能有人伪造MugglePay，告诉你们支付成功，这个商户会在收到回调时候，用该token用来检验发送消息者是MugglePay。</td>
	</tr>
</tbody>
</table>



## Example
### Request with Curl

The easiest way to try this API: <br />
Replace API_TOKEN_GET_FROM_ADMIN_PORTAL with the one from backend portal.

<img width="500px" src="https://dcdn.mugglepay.com/docs/pics/get-api-en.png" />

```
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'content-type: application/json' \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL' \
  -d '{
  "merchant_order_id": 100388,
  "price_amount": 10,
  "price_currency": "CNY"
}'

```

### Request with NodeJS

```
var request = require("request");

var options = { method: 'POST',
  url: 'https://api.mugglepay.com/v1/orders',
  headers: { 
     'token': 'API_TOKEN_GET_FROM_ADMIN_PORTAL',
     'content-type': 'application/json' 
     },
  body: { 
     merchant_order_id: '503a854998-6230-4338-adb7',
     title: "Monthly Program x 1",
     description: "Gaming for your family",
     price_amount: 1,
     price_currency: 'CNY',
		 pay_currency: 'ALIPAY',
     callback_url: "https://ecards.com/api/success",
     cancel_url: "https://ecards.com/ecardstatus?status=cancel",
     success_url: "https://ecards.com/ecardstatus?status=success",
  },
  json: true 
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

```



## POST Body
```
{
  "merchant_order_id": "503a854998-6230-4338-adb7",
  "price_amount": 1.00,
  "price_currency": "CNY",
  "title": "Monthly Program x 1",
  "description": "Gaming for your family",
  "callback_url": "https://ecards.com/api/success",
  "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
  "success_url": "https://ecards.com/ecardstatus?status=success",
  "token": "XI231SD02-SDFWE123D"
}
```

## Result Format
### 200 OK
```
{
    "status": 201,
    "order": {
        "user_id": 32014,
        "merchant_order_id": "503a854998-6230-4338-adb7",
        "title": "Monthly Program x 1",
        "description": "Gaming for your family",
        "callback_url": "https://ecards.com/api/success",
        "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
        "success_url": "https://ecards.com/ecardstatus?status=success",
        "price_amount": 0.15,
        "price_currency": "USD",
        "pay_amount": 1,
        "pay_currency": "CNY",
        "order_id": "94be2b2a-2905-4857-b701-b04e57e84593",
        "status": "NEW",
        "created_at": "2019-04-24T16:57:35.416Z",
        "updated_at": "2019-04-24T16:57:35.416Z"
    },
    "payment_url": "https://invoice.mugglepay.com/invoices?id=94be2b2a-2905-4857-b701-b04e57e84593"
}
```
### Error Format
MugglePay Server will always return status 400. If API failed, it will return error_code and error as its object.

```
{
    "status": 400,
    "error_code": "PARAMETERS_MISSING",
    "error": "Missing parameters."
}
```


## Notes
When the buyers create the order, they are redirected to payment_url, where they can see the payment amount and then pay with crypto.

Your received payments will be settled immediately if USD or stable currency is selected.