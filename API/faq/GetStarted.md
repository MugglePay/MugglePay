# Getting Started

Integrate MugglePay cryptocurrency payments into your website in minutes. This guide walks you through the complete setup process.

## Overview

MugglePay provides a pre-built payment page and complete checkout experience that can be branded for your business. Integrate once and gain new features as MugglePay evolves.

## Prerequisites

- A website or application that needs to accept payments
- Basic knowledge of HTTP APIs and webhooks
- Access to your server's backend code

## Integration Steps

### Step 1: Register and Get API Key

1. **Create Merchant Account**
   - Visit the [Merchant Portal](https://merchants.mugglepay.com/)
   - Sign up with your invitation code
   - Complete your merchant profile

![Merchant Login](http://dcdn.mugglepay.com/dt/pay/docs/mp-login.png)

2. **Get Your API Key**
   - Navigate to the API section in your dashboard
   - Copy your unique API authentication token
   - Keep this token secure - never expose it in client-side code

![API Key](http://dcdn.mugglepay.com/dt/pay/docs/mp-apikey.png)

**Learn more**: [Authentication Guide](basic/Authentication.md)

### Step 2: Integrate Payment Button

#### 2.1 Add Payment Button

Choose from our pre-designed payment buttons or create your own:

![Payment Buttons](http://dcdn.mugglepay.com/dt/pay/button/mpay-en.png)
![Payment Buttons](http://dcdn.mugglepay.com/dt/pay/button/mpay-zh.png)
![Payment Buttons](http://dcdn.mugglepay.com/dt/pay/button/mpay-icon.png)
![Payment Buttons](http://dcdn.mugglepay.com/dt/pay/button/mpay-en-black.png)

#### 2.2 Button Integration Example

```html
<!-- Basic payment button -->
<button onclick="createPayment()" class="payment-btn">
  Pay with Crypto
</button>

<script>
async function createPayment() {
  try {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        price_amount: 29.99,
        price_currency: 'USD',
        title: 'Premium Subscription'
      })
    });
    
    const result = await response.json();
    if (result.payment_url) {
      window.location.href = result.payment_url;
    }
  } catch (error) {
    console.error('Payment creation failed:', error);
  }
}
</script>
```

### Step 3: Create Order API Integration

When a customer clicks the payment button, your backend should call the [Create Order API](order/CreateOrder.md):

![Create Order Flow](http://dcdn.mugglepay.com/dt/pay/docs/mp-create.png)

#### Backend Implementation Example

```javascript
// Node.js/Express example
app.post('/api/create-order', async (req, res) => {
  try {
    const orderData = {
      merchant_order_id: generateOrderId(),
      price_amount: req.body.price_amount,
      price_currency: req.body.price_currency,
      title: req.body.title,
      description: req.body.description,
      callback_url: 'https://yoursite.com/webhooks/payment',
      success_url: 'https://yoursite.com/success',
      cancel_url: 'https://yoursite.com/cart'
    };

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
});
```

### Step 4: Handle Payment Flow

#### 4.1 Redirect to Payment Page

After successful order creation, redirect customers to the MugglePay payment page:

![Payment Page](http://dcdn.mugglepay.com/dt/pay/docs/mp-payment.png)

#### 4.2 Payment Callback (Webhook)

Set up webhook handling to receive real-time payment notifications:

```javascript
// Webhook endpoint example
app.post('/webhooks/payment', async (req, res) => {
  const { order_id, status, merchant_order_id } = req.body;
  
  if (status === 'PAID') {
    // Fulfill the customer's order
    await fulfillOrder(merchant_order_id);
  }
  
  res.status(200).send('OK');
});
```

**Important**: If you're not receiving webhook notifications, check:
- Your `callback_url` is correctly set in the Create Order request
- Your webhook endpoint is publicly accessible
- Use the [Merchant Portal](https://merchants.mugglepay.com/transactions/orders) to manually trigger callbacks for testing

### Step 5: Testing and Validation

#### 5.1 Test Your Integration

1. **Create test orders** with small amounts
2. **Test the complete flow** from button click to payment completion
3. **Verify webhook notifications** are received correctly
4. **Test error scenarios** (expired orders, cancellations)

#### 5.2 Monitor in Merchant Portal

Track all transactions and orders in the [Merchant Portal](https://merchants.mugglepay.com/):

![Merchant Dashboard](http://dcdn.mugglepay.com/dt/pay/docs/mp-admin.png)

## Complete Integration Example

Here's a minimal working example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>MugglePay Integration</title>
</head>
<body>
    <h1>Product Store</h1>
    <div class="product">
        <h2>Premium Subscription</h2>
        <p>Get access to all premium features</p>
        <p class="price">$29.99</p>
        <button onclick="buyProduct()">Buy Now</button>
    </div>

    <script>
        async function buyProduct() {
            try {
                // Create order on your backend
                const response = await fetch('/api/create-order', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        price_amount: 29.99,
                        price_currency: 'USD',
                        title: 'Premium Subscription',
                        description: 'Monthly premium access'
                    })
                });
                
                const result = await response.json();
                
                if (result.payment_url) {
                    // Redirect to MugglePay payment page
                    window.location.href = result.payment_url;
                } else {
                    alert('Failed to create order: ' + result.error);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        }
    </script>
</body>
</html>
```

## Best Practices

### ✅ Do's
- Test with small amounts before going live
- Implement proper error handling
- Use HTTPS for all API calls
- Store API tokens securely
- Monitor webhook delivery

### ❌ Don'ts
- Don't expose API tokens in client-side code
- Don't skip webhook validation
- Don't assume payments will always succeed
- Don't forget to handle edge cases

## Troubleshooting

### Common Issues

#### Webhook Not Receiving Notifications
- **Check URL accessibility**: Ensure your webhook endpoint is publicly accessible
- **Verify callback_url**: Make sure it's correctly set in Create Order requests
- **Test manually**: Use the Merchant Portal to trigger test callbacks

#### Order Creation Fails
- **Check API token**: Verify your authentication token is correct
- **Required fields**: Ensure all required parameters are provided
- **Rate limits**: Check if you've exceeded API rate limits

#### Payment Not Confirming
- **Network congestion**: Some blockchain networks may be slow
- **Order expiry**: Orders expire after 60 minutes (crypto) or 3 hours (fiat)
- **Contact support**: Reach out if issues persist

## Related Documentation

- [Create Order API](order/CreateOrder.md) - Detailed API reference
- [Payment Callback](order/PaymentCallback.md) - Webhook handling guide
- [Order Status](basic/OrderStatus.md) - Understanding payment states
- [Authentication](basic/Authentication.md) - API security guide
- [Error Codes](basic/ErrorCodes.md) - Common error solutions

## Next Steps

1. **Complete the integration** following this guide
2. **Test thoroughly** with small amounts
3. **Set up monitoring** for your payment flow
4. **Go live** with real customers
5. **Optimize** based on usage patterns

## Need Help?

- **Documentation**: Browse our complete [API reference](../README.md)
- **Support**: Contact us through the [Merchant Portal](https://merchants.mugglepay.com/)
- **Community**: Join our developer community for tips and best practices
