# AI Integration (Prompts for Cursor, Lovable, Bolt etc)

### Before Start

1. Register account with email / web3 address from [https://merchants.mugglepay.com/](https://merchants.mugglepay.com/)
2. Get server API Keys&#x20;

## Cursor Integration Guide

Integrate MugglePay with Cursor, Windsurf, and other AI-assisted coding tools to add cryptocurrency payments to your existing applications.

### Quick Setup

Copy and paste this prompt into Cursor when you want to add MugglePay to your existing project:

```
I want to add cryptocurrency payment functionality to my existing application using MugglePay. 
Please help me integrate the MugglePay API into my current [React/Next.js/Node.js] application.

Requirements:
- Accept payments in USDT, USDC
- Support multiple blockchain networks (Tron, Ethereum, Arbitrum, Base)
- Handle payment callbacks and webhooks
- Implement proper error handling and user feedback

Tech stack: [specify your preferred stack]

API Documentation:
- Create Order: https://docs.mugglepay.com/order/createorder
- Payment Callback: https://docs.mugglepay.com/order/paymentcallback

Example API call:
curl -X POST https://api.mugglepay.com/v1/orders \
  -H 'Content-Type: application/json' \
  -H 'token: YOUR_API_TOKEN' \
  -d '{
    "merchant_order_id": "order_12345",
    "price_amount": 29.99,
    "price_currency": "USD",
    "title": "Premium Subscription",
    "callback_url": "https://yoursite.com/webhooks/payment"
  }'
```

### Code Examples

#### Direct API Integration

Since we don't have a package, you'll integrate directly with our REST API. Here are the actual API endpoints and examples:

**Create Order API**

```bash
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'content-type: application/json' \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL' \
  -d '{
  "merchant_order_id": 100388,
  "title": "Grand AI Services fee",
  "price_amount": 10,
  "price_currency": "USD"
}'
```

**Response Format:**

```json
{
    "status": 201,
    "order": {
    },
    "payment_url": "https://invoice.mugglepay.com/invoices?id=94be2b2a-2905-4857-b701-b04e57e84593"
}
```

Redirect the page to the `payment_url`. If the user finishes payments, it will show the payment success.

**Advanced Order with Callback**

```bash
curl -X POST \
  https://api.mugglepay.com/v1/orders \
  -H 'content-type: application/json' \
  -H 'token: API_TOKEN_GET_FROM_ADMIN_PORTAL' \
  -d '{
     "merchant_order_id": "503a854998-6230-4338-adb7",
     "title": "Monthly Program x 1",
     "description": "Gaming for your family",
     "price_amount": 1,
     "price_currency": "USD",
     "pay_currency": "USDT_ARBI",
     "callback_url": "https://ecards.com/api/success",
     "cancel_url": "https://ecards.com/ecardstatus?status=cancel",
     "success_url": "https://ecards.com/ecardstatus?status=success"
}'
```

#### Basic Payment Button Component

```tsx
import { MugglePayButton } from 'mugglepay';

export function PaymentForm() {
  const handlePayment = async (amount: number, currency: string) => {
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price_amount: amount,
          price_currency: currency,
          title: 'Product Purchase'
        })
      });
      
      const result = await response.json();
      if (result.payment_url) {
        window.location.href = result.payment_url;
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  return (
    <MugglePayButton
      amount={29.99}
      currency="USD"
      onPayment={handlePayment}
      supportedTokens={['USDT_TRC20', 'USDC_ARB', 'ETH_BASE']}
    />
  );
}
```

#### API Route Handler

```typescript
// pages/api/create-order.ts
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const orderData = {
      merchant_order_id: generateOrderId(),
      price_amount: req.body.price_amount,
      price_currency: req.body.price_currency,
      title: req.body.title,
      callback_url: 'https://yoursite.com/webhooks/payment',
      success_url: 'https://yoursite.com/success',
      cancel_url: 'https://yoursite.com/cart'
    };

    // Make direct API call to MugglePay
    const response = await fetch('https://api.mugglepay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': process.env.MUGGLEPAY_API_TOKEN
      },
      body: JSON.stringify(orderData)
    });

    const result = await response.json();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Order creation failed' });
  }
}
```

### API Reference

#### Supported Tokens

The `pay_currency` field is optional. If it's not set, users can select manually. Here are the supported `pay_currency` values:

* **USDT**: `USDT_TRC20`, `USDT_ERC20`, `USDT_ARB`, `USDT_BNB`, `USDT_CELO`, `USDT_TON`
* **USDC**: `USDC_ERC20`, `USDC_ARB`, `USDC_SOL`, `USDC_BASE`, `USDC_POL`, `USDC_XLM`

#### Callbacks

If the payment is successful, it will trigger a callback to your `callback_url` with the payment information. Check the Payment Callback documentation for more details.

### Supported Features

#### Cryptocurrencies

* **USDT**: Tron (TRC20), Ethereum (ERC20), Arbitrum (ARB20), Celo, TON
* **USDC**: Ethereum (ERC20), Arbitrum (ARB20), Solana, Base, Polygon, Stellar
* **ETH**: Ethereum (ERC20), Arbitrum (ARB20), Base
* **CUSD**: Celo Network
* **PYUSD**: Solana Network

#### Integration Options

* React components
* Next.js API routes
* Node.js/Express middleware
* Webhook handlers
* Payment callbacks

### Best Practices

1. **Error Handling**: Always implement proper error handling for network failures
2. **User Feedback**: Provide clear feedback during payment processing
3. **Mobile Optimization**: Ensure payment flows work well on mobile devices
4. **Security**: Validate all input data and implement proper authentication
5. **Testing**: Test with small amounts before going live

### Troubleshooting

#### Common Issues

**Payment not confirmed:**

* Check if the transaction is confirmed on the blockchain
* Verify the payment amount matches exactly (including fees)
* Ensure payment is made within the time window

**Integration errors:**

* Verify API credentials are correct
* Check network connectivity
* Review error logs for specific error codes

#### Support

For technical support:

* **Documentation**: API Overview
* **Merchant Portal**: [https://merchants.mugglepay.com/](https://merchants.mugglepay.com/)
* **Email**: business@mugglepay.com

### Next Steps

1. **Choose your integration method** (CLI, MCP, or direct prompts)
2. **Set up your development environment**
3. **Create your first payment integration**
4. **Test with supported cryptocurrencies**
5. **Deploy and go live**

Ready to get started? Choose your preferred method above and begin building with VibeCoding!
