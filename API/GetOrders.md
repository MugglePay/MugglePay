# Get Orders
Retrieving information of all orders.

It's done by MugglePay payment page. ONLY use this if you want to build an in-house payment without redirecting.

--------

## Definition
**GET** https://api.mugglepay.com/v1/orders/

## Query Params

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
		<td>status</td>
		<td><code>Status Type</code></td>
		<td></td>
		<td>E.g. PAID. Default all statuses.</td>
	</tr>
	<tr>
		<td>limit</td>
		<td><code>integer</code></td>
		<td></td>
		<td>numbers of orders per page. Max: 50. Default: 10.</td>
	</tr>
	<tr>
		<td>offset</td>
		<td><code>integer</code></td>
		<td></td>
		<td>starting item. Default: 0.</td>
	</tr>
</tbody>
</table>



## Example
```

curl -X GET \
  'https://api.mugglepay.com/v1/orders?limit=20&offset=10' \
  -H 'token: TOKEN_FROM_ADMIN_PORTAL'


```
 
## Result Format
### 200 OK
```
{
    "status": 200,
    "orders": [
        {
            "order_id": "xxx-b17d-4805-b311-b95cd2d66ad0",
            "user_id": 14109,
            "merchant_order_id": "Order #5630",
            "title": "Order 5630",
            "description": "Membership $0.15",
            "callback_url": "https://ecards.com/api/success",
            "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
            "success_url": "https://ecards.com/ecardstatus?status=success",
            "token": "Ex1asdfasdf",
            "price_amount": 0.15,
            "price_currency": "USD",
            "receive_currency": "",
            "status": "NEW",
            "created_at": "2019-01-24T16:52:50.021Z",
            "updated_at": "2019-01-24T16:52:50.021Z",
            "deleted": 0
        },
        {
            "order_id": "xxx-7b0d-4b03-816f-e88a3c6bfa5c",
            "user_id": 14109,
            "merchant_order_id": "Order #5619",
            "title": "Order 5619",
            "description": "Membership $0.15",
            "callback_url": "https://ecards.com/api/success",
            "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
            "success_url": "https://ecards.com/ecardstatus?status=success",
            "token": "Exdasdfasdf",
            "price_amount": 0.15,
            "price_currency": "USD",
            "receive_currency": "",
            "status": "PAID",
            "created_at": "2019-01-24T16:40:36.264Z",
            "updated_at": "2019-01-24T16:41:01.000Z",
            "deleted": 0
        }
    ]
}
```
