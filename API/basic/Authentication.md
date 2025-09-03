# Authentication

Secure your API calls with proper authentication. This guide explains how to authenticate your requests to the MugglePay API.

## Overview

All API calls to MugglePay require authentication using an API token. Keep your API token secure and never expose it in client-side code.

## API Token Authentication

### Getting Your API Token

1. Log in to the [Merchant Portal](https://merchants.mugglepay.com/)
2. Navigate to the API section
3. Copy your unique API token

![Get API Token](https://dcdn.mugglepay.com/docs/pics/get-api-en.png)

### Using Your API Token

Include your API token in the `token` header of all authenticated requests:

```http
HTTP Header: 
token: YOUR_API_TOKEN_HERE
```

## Request Requirements

### Content-Type Header

All POST requests must include the `Content-Type: application/json` header:

```http
Content-Type: application/json
```

### Required vs Optional Fields

- **Required fields** are marked with "Yes" in the API documentation
- **Optional fields** can be omitted if not needed
- Fields marked with (*) are required

## Rate Limits

### Free Plan Limits

1. **Create Order API: 500 requests per hour per user ID**
   - This limit applies to the `createOrder` (POST) API for merchants
   - If you reach the limit, wait for the timer to reset in an hour

2. **General API: 10,000 requests per hour per IP address**
   - This applies to all APIs regardless of authentication requirements
   - Includes GetOrder, CreateOrder, Checkout, and other APIs

### Increasing Limits

To increase your rate limits:
1. Create a ticket in the [Help Center](https://merchants.mugglepay.com/)
2. Contact customer service through the chat widget
3. Provide details about your expected usage

## Security Best Practices

### ✅ Do's
- Store your API token securely on your server
- Use HTTPS for all API calls
- Rotate your API token periodically
- Monitor your API usage for unusual activity

### ❌ Don'ts
- Never expose your API token in client-side code
- Don't commit API tokens to version control
- Avoid sharing API tokens between different applications
- Don't use the same token for development and production

## Code Examples

### cURL Example

```bash
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'Content-Type: application/json' \
  -H 'token: YOUR_API_TOKEN_HERE' \
  -d '{
    "merchant_order_id": "order_123",
    "price_amount": 10.00,
    "price_currency": "USD"
  }'
```

### JavaScript Example

```javascript
const response = await fetch('https://api.mugglepay.com/v1/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'token': 'YOUR_API_TOKEN_HERE'
  },
  body: JSON.stringify({
    merchant_order_id: 'order_123',
    price_amount: 10.00,
    price_currency: 'USD'
  })
});
```

### Python Example

```python
import requests

headers = {
    'Content-Type': 'application/json',
    'token': 'YOUR_API_TOKEN_HERE'
}

data = {
    'merchant_order_id': 'order_123',
    'price_amount': 10.00,
    'price_currency': 'USD'
}

response = requests.post(
    'https://api.mugglepay.com/v1/orders',
    headers=headers,
    json=data
)
```

## Common Authentication Errors

| Error Code | Description | Solution |
|------------|-------------|----------|
| `UNAUTHORIZED` | Invalid or missing API token | Check your API token and ensure it's included in the header |
| `TOKEN_EXPIRED` | API token has expired | Generate a new API token in the Merchant Portal |
| `RATE_LIMIT_EXCEEDED` | Too many requests | Wait for rate limit reset or contact support to increase limits |

## Related Documentation

- [Create Order API](order/CreateOrder.md) - Learn how to use authentication with order creation
- [Error Codes](ErrorCodes.md) - Complete list of API error codes
- [Getting Started](faq/GetStarted.md) - Step-by-step integration guide

## Next Steps

1. **Test your authentication** by making a simple API call
2. **Review the [Create Order API](order/CreateOrder.md)** to see authentication in action
3. **Set up error handling** for authentication failures
4. **Monitor your API usage** to stay within rate limits
