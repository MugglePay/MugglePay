# Create Order

Create a new payment order to accept cryptocurrency payments from your customers. This is the primary API for initiating payments on MugglePay.

## Overview

The Create Order API performs two main functions:

1. **Creates a payment invoice** with your specified details (price, title, description)
2. **Generates a payment URL** where customers can complete their crypto payment

This is the **ONLY API** you need to integrate MugglePay payments into your website.

## API Endpoint

**POST** `https://api.mugglepay.com/v1/orders`

## Request Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `merchant_order_id` | `string` | No | Your custom order identifier. Recommended to use your application's order ID for easy tracking. |
| `price_amount` | `double` | **Yes** | The payment amount in your specified currency (e.g., 9.99) |
| `price_currency` | `string` | **Yes** | The currency for your pricing (e.g., USD). Defaults to USD if not specified. |
| `pay_currency` | `string` | No | Specific cryptocurrency for payment (e.g., ETH_BASE, USDT_ARB, USDC_BASE). If not specified, customer can choose. |
| `title` | `string` | No | Order title (max 200 characters). Examples: "Apple iPhone 15", "Order #12345", "Monthly Subscription" |
| `description` | `string` | No | Detailed order description (max 800 characters). Examples: "1x iPhone 15 Pro, 1x AirPods" |
| `callback_url` | `string` | No | Webhook URL for payment status updates. We'll notify this URL when payment status changes. |
| `cancel_url` | `string` | No | Redirect URL when customer cancels payment. Usually your cart or checkout page. |
| `success_url` | `string` | No | Redirect URL after successful payment. Usually your order confirmation page. |
| `mobile` | `boolean` | No | Optimize payment page for mobile devices if set to `true`. |
| `fast` | `boolean` | No | Return payment URL directly without additional processing. |
| `token` | `string` | No | Custom token set by merchant for webhook validation. It's useful for merchant to verify the API is from MugglePay. It's different from the API authentication token from the Merchant Portal. |

## Supported Cryptocurrencies

We support major stable tokens and networks. If `pay_currency` is specified, customers will only see that payment option.
Note: pay_currency is different from price_currency. price_currency is the label currency like USD.

| `pay_currency` | Token | Network | Description |
|----------------|-------|---------|-------------|
| `USDT_ARB` | USDT | Arbitrum | Fast and low-cost USDT transfers |
| `USDC_ARB` | USDC | Arbitrum | Stable USDC on Arbitrum network |
| `ETH_ARB` | ETH | Arbitrum | Native ETH on Arbitrum |
| `USDC_ERC20` | USDC | Ethereum | USDC on Ethereum mainnet |
| `USDT_ERC20` | USDT | Ethereum | USDT on Ethereum mainnet |
| `USDC_SOL` | USDC | Solana | USDC on Solana network |
| `USDC_POL` | USDC | Polygon | USDC on Polygon network |
| `TON` | TON | Ton Network | Native TON cryptocurrency |
| `USDT_TON` | USDT | Ton Network | USDT on Ton Network |
| `USDT_BNB` | USDT | BNB Chain | USDT on BNB Smart Chain |
| `USDT_CELO` | USDT | Celo | USDT on Celo network |
| `CUSD` | CUSD | Celo | Celo Dollar stablecoin |
| `USDC_BASE` | USDC | Base | USDC on Coinbase's Base network |
| `ETH_BASE` | ETH | Base | ETH on Base network |

**Coming Soon:** Stellar, ICP networks

## Code Examples

### cURL Example

```bash
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'Content-Type: application/json' \
  -H 'token: YOUR_API_TOKEN_HERE' \
  -d '{
    "merchant_order_id": "order_12345",
    "price_amount": 29.99,
    "price_currency": "USD",
    "title": "Premium Subscription",
    "description": "Monthly premium access to all features",
    "callback_url": "https://yoursite.com/webhooks/payment",
    "success_url": "https://yoursite.com/success",
    "cancel_url": "https://yoursite.com/cart"
  }'
```

### JavaScript Example

```javascript
const createOrder = async (orderData) => {
  try {
    const response = await fetch('https://api.mugglepay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': 'YOUR_API_TOKEN_HERE'
      },
      body: JSON.stringify(orderData)
    });
    
    const result = await response.json();
    
    if (result.status === 201) {
      // Redirect customer to payment page
      window.location.href = result.payment_url;
    } else {
      console.error('Order creation failed:', result.error);
    }
  } catch (error) {
    console.error('Network error:', error);
  }
};

// Usage
createOrder({
  merchant_order_id: 'order_12345',
  price_amount: 29.99,
  price_currency: 'USD',
  title: 'Premium Subscription',
  description: 'Monthly premium access to all features',
  callback_url: 'https://yoursite.com/webhooks/payment',
  success_url: 'https://yoursite.com/success',
  cancel_url: 'https://yoursite.com/cart'
});
```

### Python Example

```python
import requests
import json

def create_order(order_data):
    url = 'https://api.mugglepay.com/v1/orders'
    headers = {
        'Content-Type': 'application/json',
        'token': 'YOUR_API_TOKEN_HERE'
    }
    
    try:
        response = requests.post(url, headers=headers, json=order_data)
        result = response.json()
        
        if result['status'] == 201:
            print(f"Order created successfully!")
            print(f"Payment URL: {result['payment_url']}")
            return result
        else:
            print(f"Order creation failed: {result['error']}")
            return None
            
    except requests.exceptions.RequestException as e:
        print(f"Network error: {e}")
        return None

# Usage
order_data = {
    'merchant_order_id': 'order_12345',
    'price_amount': 29.99,
    'price_currency': 'USD',
    'title': 'Premium Subscription',
    'description': 'Monthly premium access to all features',
    'callback_url': 'https://yoursite.com/webhooks/payment',
    'success_url': 'https://yoursite.com/success',
    'cancel_url': 'https://yoursite.com/cart'
}

result = create_order(order_data)
```

## Request Body Example

```json
{
  "merchant_order_id": "order_12345",
  "price_amount": 29.99,
  "price_currency": "USD",
  "title": "Premium Subscription",
  "description": "Monthly premium access to all features",
  "callback_url": "https://yoursite.com/webhooks/payment",
  "success_url": "https://yoursite.com/success",
  "cancel_url": "https://yoursite.com/cart",
  "token": "custom_webhook_token_123"
}
```

## Response Format

### Success Response (200 OK)

```json
{
  "status": 201,
  "order": {
    "user_id": 32014,
    "merchant_order_id": "order_12345",
    "title": "Premium Subscription",
    "description": "Monthly premium access to all features",
    "callback_url": "https://yoursite.com/webhooks/payment",
    "cancel_url": "https://yoursite.com/cart",
    "success_url": "https://yoursite.com/success",
    "price_amount": 29.99,
    "price_currency": "USD",
    "pay_amount": 29.99,
    "pay_currency": "USD",
    "order_id": "94be2b2a-2905-4857-b701-b04e57e84593",
    "status": "NEW",
    "created_at": "2024-01-15T10:30:00.000Z",
    "updated_at": "2024-01-15T10:30:00.000Z"
  },
  "payment_url": "https://invoice.mugglepay.com/invoices?id=94be2b2a-2905-4857-b701-b04e57e84593"
}
```

### Error Response (400 Bad Request)

```json
{
  "status": 400,
  "error_code": "PARAMETERS_MISSING",
  "error": "Missing required parameters: price_amount, price_currency"
}
```

## Important Notes

- **Payment URL**: After successful order creation, redirect customers to the `payment_url` where they can select their preferred cryptocurrency and complete payment
- **Settlement**: Payments in USD or stable currencies are settled immediately
- **Order Expiry**: Orders expire after 60 minutes for crypto payments, 3 hours for fiat payments
- **Webhooks**: Use the `callback_url` to receive real-time payment status updates

## Tips & Best Practices

### ✅ Do's
- Always include a unique `merchant_order_id` for easy tracking
- Use descriptive titles and descriptions for better customer experience
- Test your webhook endpoints before going live
- Handle both success and error responses appropriately

### ❌ Common Mistakes
- Forgetting to include the `Content-Type: application/json` header
- Using the same `merchant_order_id` for multiple orders
- Not handling webhook failures gracefully
- Missing error handling for failed API calls

## Related Documentation

- [Payment Callback](PaymentCallback.md) - Learn how to handle payment notifications
- [Order Status](basic/OrderStatus.md) - Understand different order states
- [Authentication](basic/Authentication.md) - Secure your API calls
- [Error Codes](basic/ErrorCodes.md) - Handle API errors properly

## Next Steps

1. **Test the API** with small amounts in sandbox mode
2. **Set up webhook handling** to receive payment notifications
3. **Implement error handling** for failed order creation
4. **Review [Payment Callback](PaymentCallback.md)** to complete the payment flow
