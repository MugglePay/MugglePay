# Get Order

Retrieving a specific order by MugglePay order ID

It's done by MugglePay payment page. ONLY use this if you want to build an in-house payment without redirecting.

***

## Definition

**GET** https://api.mugglepay.com/v1/orders/:order\_id

## Body Params

<table><thead><tr><th width="211">Param</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>order.order_id</td><td><code>string</code></td><td>Yes</td><td>MugglePay order ID. It's provided in the response of Create Order.</td></tr><tr><td>order.price_amount</td><td>Float</td><td>Yes</td><td>Label Price in USD (e.g. FIAT Lable price). In this example, it's $9.9 in US Dollars</td></tr><tr><td>invoice.pay_amount</td><td>Float</td><td>Yes</td><td>Token amount in Token. In this example, it's 9.9 USDC Token on Solana.  </td></tr><tr><td>invoice.pay_currency</td><td>string</td><td>Yes</td><td>The crypto currency we want to pay. In this example, it's USDC_SOL (USDC on Solana) </td></tr><tr><td>invoice.memo</td><td>string</td><td>No</td><td>If you are using MugglePay invoice page, it's automatically handled if user pay with crypto wallets. If you want to customize your payment page, add the memo when paying the transaction. It's optional for most  payments. It's required for payments like TON, Solana.</td></tr></tbody></table>

## Example

```
curl -X GET \
  https://api.mugglepay.com/v1/orders/8cbe9c00-7b0d-4b03-816f-e88a3c6bfa5c \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL'
	
```

## Result Format

### 200 OK

```
{
  status: 200,
  merchant: {},
  order: {
    order_id: 'd84cc10f-9e88-4783-9fb0-3a7b9aea8de4',
    user_id: '48443257-84ec-498f-b5b1-541082858651',
    merchant_order_id: 'Order_ID_1736446203980',
    title: 'Order: Online English Class',
    description: 'Amount: $9.9 USD',
    callback_url: '',
    cancel_url: '',
    success_url: '',
    price_amount: 9.9,  # Label Price in USD (e.g. FIAT Lable price)
    price_currency: 'USD',
    status: 'NEW',
    notified: 'NEW',
    paid_at: null,
    created_at: '2025-01-09T18:10:04.329Z',
    updated_at: '2025-01-09T18:10:10.000Z',
    pay_amount: 9.9,
    pay_currency: 'USD',
    is_self: false,
    salt: 704327
  },
  invoice: {
    invoice_id: 'dc5425bf-29fa-4b59-bc20-2203e05a8eed',
    order_id: 'd84cc10f-9e88-4783-9fb0-3a7b9aea8de4',
    pay_amount: 9.9,     # Token amount in Token (e.g. 9.9 USDC Token on Solana)
    pay_currency: 'USDC_SOL',
    status: 'NEW',
    created_at: '2025-01-09T18:10:20.437Z',
    created_at_t: 1736446220437,
    expired_at: '2025-01-09T19:10:20.000Z',
    expired_at_t: 1736449820000,
    merchant_order_id: 'Order_ID_1736446203980',
    receive_amount: 9.9,
    receive_currency: 'USD',
    qrcode: 'BtFAMxkNJ6LfVFGFK9qXiEv8hytkaacBYz19xzLrAx7F',
    address: 'BtFAMxkNJ6LfVFGFK9qXiEv8hytkaacBYz19xzLrAx7F',
    memo: '325242'      # Add the memo when paying the transaction.
  },
  permission: ''
}
```

### Error Format

MugglePay Server will always return status 400. If API failed, it will return error\_code and error as its object.

```
{
  "eror": "Order not found",
  "error_code": "ORDER_NOT_VALID",
  "status": "400"
}
```
