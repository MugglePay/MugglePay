# Cancel Order

If the customer wants to switch to USDT after selecting BTC. She/he will cancel order and reselect. It’s done by MugglePay Invoice page. ONLY use this if you want to build an in-house payment without redirecting to MugglePay Invoice page.

It is to avoid order conflict, if the client cannot get successful payment result or any response from MugglePay, it should send a cancel request to MugglePay to cancel the failed order.

Use it when the order status is NEW.


--------

## Definition
**POST** https://api.mugglepay.com/v1/orders/:order_id/cancel

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
		<td>Yes</td>
		<td>MugglePay order ID. It's provided in the response of Create Order.</td>
	</tr>
</tbody>
</table>


## Example
```
curl -X POST \
  https://api.mugglepay.com/v1/orders/8cbe9c33-7b0d-4b03-816f-e88a3c6bfa5c \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL'
	
```
