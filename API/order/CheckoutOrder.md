# Checkout Order
Based on the purchase amount, the customer can select payment currency for the order. The response will have the pay_amount and payment_address. You can redirect the buyer to the payment_url. 


It's done by our side. ONLY use this if you want to build an in-house payment without redirecting to our page. This API is only needed with no page redirecting.

--------

## Definition
**POST** https://api.mugglepay.com/v1/orders/:id/checkout

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
		<td>order_id</td>
		<td><code>string</code></td>
		<td></td>
		<td>MugglePay order ID</td>
	</tr>
	<tr>
		<td>pay_currency</td>
		<td><code>string</code></td>
		<td>Yes</td>
		<td>Payment cryptocurrency. It's currency selected by the user. For example, "EOS".</td>
	</tr>
</tbody>
</table>


 
## Result Format
MugglePay Server will always return status 200 on success API. 
### 200 OK
```
{
    "status": 200,
    "order": {
        "order_id": "8cbe9c00-7b0d-4b03-816f-e88a3c6bfa5c",
        "user_id": 14309,
        "merchant_order_id": "ORDER_16800000000_1_1556124035619",
        "title": "Order 5619",
        "description": "Membership 2019.03: $9.9,
        "callback_url": "https://ecards.com/api/success",
        "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
        "success_url": "https://ecards.com/ecardstatus?status=success",
        "token": "ECARDSxxxsd1",
        "price_amount": 9.9,
        "price_currency": "USD",
        "receive_currency": "",
        "status": "PAID",
        "created_at": "2019-04-24T16:40:36.264Z",
        "updated_at": "2019-04-24T16:41:01.000Z",
        "deleted": 0
    },
    "invoice": {
        "invoice_id": "7707ce37-aad6-4a9d-94b4-821db7c7a958",
        "order_id": "8cbe9c00-7b0d-4b03-816f-e88a3c6bfa5c",
        "pay_amount": 3.0712,
        "pay_currency": "EOS",
        "status": "PAID",
        "created_at": "2019-04-24T16:40:36.350Z",
        "created_at_t": 1556124036350,
        "expired_at": "2019-04-24T16:45:41.000Z",
        "expired_at_t": 1556124341000,
        "merchant_order_id": "ORDER_16800000000_1_1556124035619",
        "receive_amount": 9.9,
        "receive_currency": "USD"
    }
}
```
### Error Format
MugglePay Server will always return status 400. If API failed, it will return error_code and error as its object.
```
{
    "status": 400,
    "error_code": "ORDER_NO_PERMISSION",
    "error": "Order does not exist or permission denied."
}
```
## Notes
If you want the user to stay at your website, a QR code can generated based on the pay_amount and payment_address. Buyer can scan the QR code with any crypto wallets on their mobiles.

