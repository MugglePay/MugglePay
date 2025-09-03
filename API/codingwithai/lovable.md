# Lovable Integration Guide

Integrate MugglePay with V0, Lovable, and other AI development platforms to add cryptocurrency payments to your existing applications.

## Quick Start

### One-Shot Implementation

You can one-shot an example implementation using a direct prompt. Simply start your prompt with what kind of app you want to build, and then based on the tech stack you want, copy one of the snippets below and paste it in as part of your initial prompt.

## Integration Prompts

### Prompt 1: React + TypeScript Payment Integration

```
I want to add cryptocurrency payment functionality to my existing React TypeScript application using MugglePay. 
Please help me integrate the MugglePay API into my current application.

Requirements:
- Accept payments in USDT, USDC
- Support multiple blockchain networks (Tron, Ethereum, Arbitrum, Base)
- Handle payment callbacks and webhooks
- Implement proper error handling and user feedback
- Use React with TypeScript
- Include responsive design for mobile and desktop

Tech stack: React 18, TypeScript, Tailwind CSS, Vite

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

### Prompt 2: Next.js Full-Stack Payment Integration

```
I want to add cryptocurrency payment functionality to my existing Next.js application using MugglePay.
Please help me integrate the MugglePay API into my current full-stack application.

Requirements:
- Next.js 14 with App Router
- API routes for order creation and webhook handling
- Database integration for order tracking
- Admin dashboard for merchants
- Payment analytics and reporting
- Support for USDT, USDC on multiple networks
- Real-time payment status updates

Tech stack: Next.js 14, TypeScript, Prisma, PostgreSQL, Tailwind CSS

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

### Prompt 3: Node.js/Express Payment Integration

```
I want to add cryptocurrency payment functionality to my existing Node.js/Express application using MugglePay.
Please help me integrate the MugglePay API into my current RESTful API service.

Requirements:
- Express.js server with TypeScript
- JWT authentication for merchants
- Rate limiting and security middleware
- Comprehensive error handling
- Payment order management
- Webhook processing
- Support for USDT, USDC across multiple networks
- Database models for orders and transactions

Tech stack: Node.js, Express, TypeScript, MongoDB, JWT, Rate Limiting

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

### Prompt 4: Mobile-First Payment Integration

```
I want to add cryptocurrency payment functionality to my existing mobile-first web application using MugglePay.
Please help me integrate the MugglePay API into my current responsive application.

Requirements:
- Mobile-first responsive design
- Touch-friendly payment interface
- QR code generation for payments
- Offline capability for viewing orders
- Push notifications for payment updates
- Support for USDT, USDC on Tron, Ethereum, Arbitrum
- Progressive Web App (PWA) features

Tech stack: React, TypeScript, Tailwind CSS, PWA, Service Workers

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

## Code Snippets for Direct Use

### Direct API Integration

Since we don't have a package, you'll integrate directly with our REST API. Here are the actual API endpoints and examples:

#### Create Order API

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

#### Advanced Order with Callback

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

### Payment Button Component

```tsx
import React, { useState } from 'react';

interface PaymentButtonProps {
  amount: number;
  currency: string;
  onSuccess: (orderId: string) => void;
  onError: (error: string) => void;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({
  amount,
  currency,
  onSuccess,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          price_amount: amount,
          price_currency: currency,
          title: 'Payment',
          description: `Payment for ${currency} ${amount}`
        })
      });

      const result = await response.json();
      if (result.payment_url) {
        window.location.href = result.payment_url;
      } else {
        onError('Failed to create payment order');
      }
    } catch (error) {
      onError('Payment initialization failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={isLoading}
      className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors"
    >
      {isLoading ? 'Processing...' : `Pay ${currency} ${amount}`}
    </button>
  );
};
```

### Order Creation API

```typescript
// pages/api/create-order.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { price_amount, price_currency, title, description } = req.body;

    const orderData = {
      merchant_order_id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      price_amount,
      price_currency,
      title,
      description,
      callback_url: `${process.env.BASE_URL}/api/webhooks/payment`,
      success_url: `${process.env.BASE_URL}/success`,
      cancel_url: `${process.env.BASE_URL}/cancel`
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
    console.error('Order creation error:', error);
    res.status(500).json({ error: 'Order creation failed' });
  }
}
```

### Webhook Handler

```typescript
// pages/api/webhooks/payment.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { order_id, status, pay_currency, pay_amount } = req.body;

    // Verify webhook signature (implement your verification logic)
    
    // Update order status in your database
    await updateOrderStatus(order_id, status, pay_currency, pay_amount);

    // Send confirmation email or notification
    if (status === 'paid') {
      await sendPaymentConfirmation(order_id);
    }

    res.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
}

async function updateOrderStatus(orderId: string, status: string, currency: string, amount: number) {
  // Implement your database update logic
  console.log(`Order ${orderId} updated: ${status} - ${currency} ${amount}`);
}

async function sendPaymentConfirmation(orderId: string) {
  // Implement your notification logic
  console.log(`Payment confirmation sent for order ${orderId}`);
}
```

## Supported Features

### Cryptocurrencies & Networks
- **USDT**: Tron (TRC20), Ethereum (ERC20), Arbitrum (ARB20), Celo, TON
- **USDC**: Ethereum (ERC20), Arbitrum (ARB20), Solana, Base, Polygon, Stellar
- **ETH**: Ethereum (ERC20), Arbitrum (ARB20), Base
- **CUSD**: Celo Network
- **PYUSD**: Solana Network

### Integration Capabilities
- Payment button components
- Order management APIs
- Webhook processing
- Real-time status updates
- Multi-network support
- Mobile-responsive design

## Best Practices for AI Development

1. **Clear Requirements**: Be specific about your tech stack and requirements
2. **Iterative Development**: Start with basic functionality and add features incrementally
3. **Error Handling**: Always include comprehensive error handling in your prompts
4. **Testing**: Request test cases and error scenarios in your prompts
5. **Documentation**: Ask for inline comments and documentation

## Troubleshooting

### Common AI Integration Issues

**Vague Requirements:**
- Be specific about your tech stack
- Include specific feature requirements
- Mention any constraints or preferences

**Missing Dependencies:**
- Always specify the exact versions you want
- Include package manager preferences
- Mention any specific libraries or frameworks

**Incomplete Implementation:**
- Request complete, runnable code
- Ask for error handling and edge cases
- Request testing instructions

## Support Resources

- **API Documentation**: [API Overview](../faq/Overview.md)
- **Getting Started**: [Integration Guide](../faq/GetStarted.md)
- **Supported Tokens**: [Token List](../faq/SupportedTokens.md)
- **Merchant Portal**: [https://merchants.mugglepay.com/](https://merchants.mugglepay.com/)
- **Technical Support**: business@mugglepay.com

## Next Steps

1. **Choose your prompt** based on your desired tech stack
2. **Customize the requirements** for your specific use case
3. **Generate your application** using your preferred AI platform
4. **Test and iterate** on the generated code
5. **Deploy and go live** with your payment integration

Ready to integrate? Choose your prompt above and start adding MugglePay to your existing application with your AI development platform!
