# Refund

Making a refund request for a specific order by MugglePay order ID.

Use it when the order status is PAID.

It's done by MugglePay payment page. ONLY use this if you want to build an in-house payment without redirecting.

--------

## Definition
**POST** https://api.mugglepay.com/v1/orders/:order_id/refund

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
  https://api.mugglepay.com/v1/orders/8cbe9c00-7b0d-4b03-816f-e88a3c6bfa5c \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL'
	
```
