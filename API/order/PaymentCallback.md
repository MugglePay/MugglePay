# Payment Callback (Webhook)

MugglePay can send webhook events that notify your application any time order status has been paid.

Depending on how you fulfill your payment, you will be informed about the status changes after the payment has been authenticated. You might also use webhooks as the basis to:

 * Update a customer’s membership record in your database when a subscription payment succeeds
 * Email a customer when a subscription payment fails
 * Log an accounting entry when a transfer is paid
 


This is the ONLY thing needed on the backend to keep track of the Payment status.

--------


## Request
1. Callback data is sent in POST method.
2. Content-Type: application/json
3. Authentication will be the token provided in CreateOrder.
4. MugglePay sends payment notification while your application returns response 200 (OK) HTTP status code. You should respond in json format with content: 
```
 {
     "status": 200
 }
```
5. Pay attention to `token`. The `token` sent in the body, is provided by merchants. Merchants will use it to validate the callback request (to prevent fraud attemps callbacks).

## Example
```
	const body = { 
		merchant_order_id: merchant_order_id, // provided by CreateOrder
		order_id: order_id,
		status: 'PAID',
		price_amount: 0.14,
		price_currency: 'USD',
		pay_amount: 1,
		pay_currency: 'CNY',
		created_at: '2019-04-24T17:23:54.311Z'),
		created_at_t: 1556126634311,
		token: token,                          // token provided by CreateOrder
		meta: {
			payment: 'ALIPAY', // ALIPAY or WECHAT
			total_amount: 1.00, // Amount in CNY, ￥8.50
			trade_no: 123, // Only in Alipay
			out_trade_no: 123, // merchant_order_id
		}
	}
	return request(merchant_callback_url, { // url provided by CreateOrder
		method: 'POST',
		body: body
	})
```

## Data Structure

<table>
<thead>
	<tr>
	<th>Param</th>
	<th>Type</th>
	<th>Description</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>order_id</td>
		<td><code>string</code></td>
		<td>MugglePay order ID</td>
	</tr>
	<tr>
		<td>merchant_order_id</td>
		<td><code>string</code></td>
		<td>Order ID of the merchant. Should be used to identify order or invoice.</td>
	</tr>
	<tr>
		<td>status</td>
		<td><code>string</code></td>
		<td>MugglePay payment status.</td>
	</tr>
	<tr>
		<td>price_amount</td>
		<td><code>string</code></td>
		<td>The price set by the merchant; Example: 9.99</td>
	</tr>
	<tr>
		<td>price_currency</td>
		<td><code>string</code></td>
		<td>Currency in which the merchant's goods/services are priced; Example: USD</td>
	</tr>
	<tr>
		<td>created_at</td>
		<td><code>Date</code></td>
		<td>Invoice creation time; Example: '2019-04-24T17:23:54.311Z'</td>
	</tr>
	<tr>
		<td>created_at_t</td>
		<td><code>Long(Epoch)</code></td>
		<td>Invoice creation time; Example: 1556126634311</td>
	</tr>
	<tr>
		<td>token</td>
		<td><code>string</code></td>
		<td>Your token provided by CreateOrder to validate Payment Callback. 这里的token是由商户平台产生的，在CreateOrder时候，在body传入（如果创建时未填写该字段，则回调时候不会传入）。这个来检验回调的真伪，例如用户支付成功，MugglePay会给商户回调地址发通知，但是可能有人伪造MugglePay，伪造告诉商户支付成功。商户应该在回调检验时候，检验该token的正确性。</td>
	</tr>
	<tr>
		<td>meta</td>
		<td><code>json</code></td>
		<td>Option: provide third party information. e.g. Alipay or WechatPay. An example of Alipay is provided as example.</td>
	</tr>
</tbody>
</table>


## Retry Time

The MugglePay server attempts to send callbacks multiple times until the send is either successful or the MugglePay server gives up. The MugglePay server attempts retries using an exponential back on the following schedule:

* 1-minute delay
* 2-minute delay
* 4-minute delay
* 8-minute delay
* 16-minute delay
* 32-minute delay
* 64-minute delay
* 128-minute delay
* 256-minute delay
* Retry attempt times double for up to 3 days
