# Payment Callback (Webhook)

Receive real-time notifications when payment status changes. Webhooks are the primary way to stay updated on order status and automatically fulfill customer orders.

## Overview

MugglePay sends webhook events to notify your application whenever an order status changes. This is the **ONLY backend mechanism** you need to track payment status and automatically fulfill orders.

## Use Cases

Webhooks enable you to:

- **Update customer records** when subscription payments succeed
- **Send confirmation emails** after successful payments
- **Log accounting entries** when transfers are completed
- **Update inventory** when orders are paid
- **Activate services** immediately upon payment confirmation

## Webhook Configuration

### Setting Up Your Endpoint

1. **Provide callback URL** in your [Create Order](CreateOrder.md) request
2. **Ensure endpoint is public** and accessible from the internet
3. **Handle POST requests** with JSON payloads
4. **Return HTTP 200** to acknowledge receipt

### Authentication

Webhooks are authenticated using the `merchant_token` field you provide in the Create Order request. This prevents fraudulent callback attempts.

## Request Details

### HTTP Method
- **Method**: POST
- **Content-Type**: application/json
- **Authentication**: Token-based (from Create Order)

### Response Requirement
Your webhook endpoint must return HTTP 200 with this JSON response:

```json
{
  "status": 200
}
```

## Webhook Payload Structure

| Field | Type | Description |
|-------|------|-------------|
| `order_id` | `string` | MugglePay's internal order identifier |
| `merchant_order_id` | `string` | Your custom order ID from Create Order |
| `status` | `string` | Current payment status (NEW, PENDING, PAID, etc.) |
| `price_amount` | `string` | Original price set by merchant (e.g., "29.99") |
| `price_currency` | `string` | Currency for pricing (e.g., "USD") |
| `pay_amount` | `string` | Actual amount paid by customer |
| `pay_currency` | `string` | Currency used for payment |
| `created_at` | `string` | ISO 8601 timestamp of order creation |
| `created_at_t` | `number` | Unix timestamp (epoch) of order creation |
| `merchant_token` | `string` | Your custom merchant_token for webhook validation |
| `meta` | `object` | Additional payment information (optional) |

## Code Examples

### Node.js/Express Example

```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhooks/payment', async (req, res) => {
  try {
    const {
      order_id,
      merchant_order_id,
      status,
      price_amount,
      price_currency,
      merchant_token
    } = req.body;

    // Validate webhook token
    if (!validateWebhookToken(merchant_token)) {
      console.error('Invalid webhook merchant_token');
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Handle different status changes
    switch (status) {
      case 'PAID':
        await fulfillOrder(merchant_order_id);
        console.log(`Order ${merchant_order_id} paid successfully`);
        break;
      
      case 'EXPIRED':
        await handleExpiredOrder(merchant_order_id);
        console.log(`Order ${merchant_order_id} expired`);
        break;
      
      case 'CANCELED':
        await handleCanceledOrder(merchant_order_id);
        console.log(`Order ${merchant_order_id} canceled`);
        break;
      
      default:
        console.log(`Order ${merchant_order_id} status: ${status}`);
    }

    // Always return 200 to acknowledge receipt
    res.json({ status: 200 });
    
  } catch (error) {
    console.error('Webhook processing error:', error);
    // Still return 200 to prevent retries
    res.json({ status: 200 });
  }
});

function validateWebhookToken(merchant_token) {
  // Implement your token validation logic
  return merchant_token === process.env.WEBHOOK_TOKEN;
}

async function fulfillOrder(merchantOrderId) {
  // Implement order fulfillment logic
  // Update database, send confirmation email, etc.
}

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});
```

### Python/Flask Example

```python
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/webhooks/payment', methods=['POST'])
def payment_webhook():
    try:
        data = request.get_json()
        
        # Extract webhook data
        order_id = data.get('order_id')
        merchant_order_id = data.get('merchant_order_id')
        status = data.get('status')
        token = data.get('token')
        
        # Validate webhook token
        if not validate_webhook_token(token):
            print(f"Invalid webhook token for order {merchant_order_id}")
            return jsonify({'error': 'Unauthorized'}), 401
        
        # Process status change
        if status == 'PAID':
            fulfill_order(merchant_order_id)
            print(f"Order {merchant_order_id} fulfilled successfully")
        elif status == 'EXPIRED':
            handle_expired_order(merchant_order_id)
            print(f"Order {merchant_order_id} expired")
        elif status == 'CANCELED':
            handle_canceled_order(merchant_order_id)
            print(f"Order {merchant_order_id} canceled")
        
        # Return success response
        return jsonify({'status': 200})
        
    except Exception as e:
        print(f"Webhook processing error: {e}")
        # Return 200 even on error to prevent retries
        return jsonify({'status': 200})

def validate_webhook_token(token):
    return token == os.environ.get('WEBHOOK_TOKEN')

def fulfill_order(merchant_order_id):
    # Implement order fulfillment logic
    pass

if __name__ == '__main__':
    app.run(debug=True, port=3000)
```

### PHP Example

```php
<?php
// webhook.php

// Get webhook data
$webhook_data = json_decode(file_get_contents('php://input'), true);

// Validate webhook token
$expected_token = $_ENV['WEBHOOK_TOKEN'];
$received_token = $webhook_data['token'] ?? '';

if ($received_token !== $expected_token) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized']);
    exit;
}

// Extract webhook fields
$order_id = $webhook_data['order_id'];
$merchant_order_id = $webhook_data['merchant_order_id'];
$status = $webhook_data['status'];
$price_amount = $webhook_data['price_amount'];
$price_currency = $webhook_data['price_currency'];

// Process status change
switch ($status) {
    case 'PAID':
        fulfillOrder($merchant_order_id);
        error_log("Order {$merchant_order_id} paid successfully");
        break;
    
    case 'EXPIRED':
        handleExpiredOrder($merchant_order_id);
        error_log("Order {$merchant_order_id} expired");
        break;
    
    case 'CANCELED':
        handleCanceledOrder($merchant_order_id);
        error_log("Order {$merchant_order_id} canceled");
        break;
    
    default:
        error_log("Order {$merchant_order_id} status: {$status}");
}

// Return success response
http_response_code(200);
echo json_encode(['status' => 200]);

function fulfillOrder($merchantOrderId) {
    // Implement order fulfillment logic
    // Update database, send confirmation email, etc.
}

function handleExpiredOrder($merchantOrderId) {
    // Handle expired order logic
}

function handleCanceledOrder($merchantOrderId) {
    // Handle canceled order logic
}
?>
```

## Sample Webhook Payload

```json
{
  "merchant_order_id": "order_12345",
  "order_id": "94be2b2a-2905-4857-b701-b04e57e84593",
  "status": "PAID",
  "price_amount": "29.99",
  "price_currency": "USD",
  "pay_amount": "29.99",
  "pay_currency": "USD",
  "created_at": "2024-01-15T10:30:00.000Z",
  "created_at_t": 1705312200000,
  "token": "your_custom_token_123",
  "meta": {
    "payment": "USDT_ARB",
    "transaction_hash": "0x1234...",
    "network": "Arbitrum"
  }
}
```

## Retry Mechanism

MugglePay automatically retries failed webhook deliveries using exponential backoff:

| Attempt | Delay | Total Time |
|---------|-------|------------|
| 1st | 1 minute | 1 minute |
| 2nd | 2 minutes | 3 minutes |
| 3rd | 4 minutes | 7 minutes |
| 4th | 8 minutes | 15 minutes |
| 5th | 16 minutes | 31 minutes |
| 6th | 32 minutes | 63 minutes |
| 7th | 64 minutes | 2 hours 7 minutes |
| 8th | 128 minutes | 4 hours 15 minutes |
| 9th | 256 minutes | 8 hours 31 minutes |
| Continues | Doubles | Up to 3 days |

**Important**: Always return HTTP 200 to prevent unnecessary retries.

## Security Best Practices

### ✅ Do's
- **Validate webhook tokens** to prevent fraud
- **Use HTTPS** for all webhook endpoints
- **Implement idempotency** to handle duplicate webhooks
- **Log all webhook events** for debugging
- **Return HTTP 200** even on processing errors

### ❌ Don'ts
- Don't ignore webhook validation
- Don't expose webhook endpoints without authentication
- Don't return error codes that trigger retries
- Don't process webhooks synchronously for long operations

## Testing Webhooks

### Local Development
1. Use tools like [ngrok](https://ngrok.com/) to expose local endpoints
2. Test with small amounts in sandbox mode
3. Verify webhook delivery and processing

### Manual Testing
- Use the [Merchant Portal](https://merchants.mugglepay.com/transactions/orders)
- Click "Trigger Payment Callback" button for testing
- Monitor webhook delivery in your logs

## Troubleshooting

### Common Issues

#### Webhook Not Receiving
- **Check endpoint accessibility**: Ensure your URL is publicly accessible
- **Verify callback_url**: Confirm it's correctly set in Create Order
- **Check firewall settings**: Ensure incoming POST requests are allowed
- **Test manually**: Use Merchant Portal to trigger test callbacks

#### Webhook Processing Errors
- **Validate merchant token**: Ensure webhook merchant_token matches your expected value
- **Check payload structure**: Verify all required fields are present
- **Handle errors gracefully**: Return 200 even when processing fails
- **Monitor logs**: Check for specific error messages

#### Duplicate Webhooks
- **Implement idempotency**: Process each webhook only once
- **Check order_id**: Use unique identifiers to prevent duplicates
- **Database constraints**: Add unique constraints on order processing

## Related Documentation

- [Create Order](CreateOrder.md) - Set up webhook endpoints
- [Order Status](basic/OrderStatus.md) - Understand status values
- [Authentication](basic/Authentication.md) - Secure your webhooks
- [Getting Started](faq/GetStarted.md) - Complete integration guide

## Next Steps

1. **Implement webhook endpoint** following the examples above
2. **Test webhook delivery** with small test orders
3. **Add order fulfillment logic** for PAID status
4. **Monitor webhook processing** in production
5. **Set up alerting** for webhook failures
