# Order Status

Understand the different states of your payment orders and how to handle each status appropriately.

## Overview

Order status indicates the current state of a payment transaction. The most important statuses for merchants are **"NEW"** and **"PAID"**. When an order reaches "PAID" status, you should fulfill the customer's purchase.

Every status change triggers a [Payment Callback](../order/PaymentCallback.md) to notify your system.

## Order Statuses

| Status | Description | Action Required |
|--------|-------------|-----------------|
| **NEW** | Order created, payment currency not yet selected | Wait for customer to select payment method |
| **PENDING** | Payment detected, waiting for blockchain confirmation | Monitor for confirmation (varies by network) |
| **PAID** | Payment confirmed and credited to merchant | ✅ **Fulfill customer's order** |
| **UNRESOLVED** | Payment confirmed but amount differs from expected | Review payment details and resolve manually |
| **RESOLVED** | Merchant has marked the payment as resolved | No action needed |
| **EXPIRED** | Order expired without payment (60 min for crypto, 3 hours for fiat) | Create new order if customer wants to retry |
| **CANCELED** | Customer canceled the order | No action needed, order cannot be paid |
| **REFUND_PENDING** | Refund request submitted, pending confirmation | Wait for refund to process |
| **REFUNDED** | Payment has been refunded | No action needed |

## Status Flow

```
1. NEW
   ↓
2. PENDING (payment detected)
   ↓
   ├─ CANCELED/EXPIRED (Final Status)
   ├─ UNRESOLVED → RESOLVED (Final Status)
   └─ PAID (Final Status)
       ↓
       └─ REFUNDED (Final Status)
```

## Detailed Status Explanations

### NEW
- **What it means**: Order has been created but customer hasn't selected a payment method yet
- **What happens**: Customer sees payment options and can choose their preferred cryptocurrency
- **Action needed**: None - wait for customer to proceed

### PENDING
- **What it means**: Customer has initiated payment, transaction detected on blockchain
- **Confirmation times**:
  - **Bitcoin**: ~10 minutes
  - **Ethereum**: ~1 minute
  - **EOS**: ~3 seconds
  - **Stable networks**: Usually 1-5 minutes
- **Action needed**: Monitor for confirmation, don't fulfill order yet

### PAID
- **What it means**: Payment fully confirmed and credited to your merchant account
- **What happens**: Customer is redirected to your success URL
- **Action needed**: ✅ **Immediately fulfill the customer's order** (deliver product, activate service, etc.)

### UNRESOLVED
- **What it means**: Payment confirmed but amount differs from expected
- **Common causes**:
  - **Overpaid**: Customer sent more than required
  - **Underpaid**: Customer sent less than required
  - **Delayed**: Payment arrived after order expiry
- **Action needed**: Review payment details and mark as resolved when appropriate

### EXPIRED
- **What it means**: Order expired without payment
- **Timing**:
  - **Crypto payments**: 60 minutes
  - **Fiat payments**: 3 hours
- **Action needed**: Create new order if customer wants to retry

### CANCELED
- **What it means**: Customer explicitly canceled the payment
- **What happens**: Customer is redirected to your cancel URL
- **Action needed**: None - order cannot be paid

## Handling Status Changes

### Automatic Notifications
- **Webhooks**: Receive real-time updates via [Payment Callback](../order/PaymentCallback.md)
- **Email notifications**: Optional email alerts for status changes
- **Merchant Portal**: View all orders and statuses in real-time

### Manual Status Management
- **Resolve UNRESOLVED orders**: Mark as resolved when payment issues are handled
- **Monitor PENDING orders**: Track confirmation times for different networks
- **Handle EXPIRED orders**: Prompt customers to create new orders if needed

## Network-Specific Considerations

### Fast Networks (Arbitrum, Polygon, Base)
- **Confirmation time**: Usually 1-2 minutes
- **Gas fees**: Lower than Ethereum mainnet
- **Reliability**: High

### Ethereum Mainnet
- **Confirmation time**: 1-5 minutes (varies with network congestion)
- **Gas fees**: Higher during peak times
- **Reliability**: Very high

### Bitcoin Network
- **Confirmation time**: 10-60 minutes (1-6 confirmations)
- **Fees**: Varies with network congestion
- **Reliability**: Very high

## Troubleshooting

### Common Issues

#### Payment Not Confirming
- **Check network status**: Some networks may be congested
- **Verify transaction hash**: Use blockchain explorer to check status
- **Wait for confirmations**: Different networks require different confirmation counts

#### Order Expired
- **Check timing**: Crypto orders expire after 60 minutes
- **Create new order**: Customer needs to start fresh payment process
- **Update inventory**: Ensure product is still available

#### UNRESOLVED Status
- **Review payment details**: Check actual vs. expected amount
- **Contact customer**: Clarify payment intentions
- **Mark as resolved**: When payment issue is handled

## Best Practices

### ✅ Do's
- Always wait for "PAID" status before fulfilling orders
- Monitor PENDING orders for confirmation
- Handle UNRESOLVED orders promptly
- Use webhooks for real-time status updates
- Keep customers informed about payment status

### ❌ Don'ts
- Don't fulfill orders on PENDING status
- Don't ignore UNRESOLVED payments
- Don't assume payment will confirm automatically
- Don't create duplicate orders for expired payments

## Related Documentation

- [Payment Callback](order/PaymentCallback.md) - Handle status change notifications
- [Create Order](order/CreateOrder.md) - Initialize new payment orders
- [Get Order](order/GetOrder.md) - Check current order status
- [Error Codes](ErrorCodes.md) - Understand error responses

## Next Steps

1. **Set up webhook handling** to receive real-time status updates
2. **Implement order fulfillment logic** for PAID status
3. **Create monitoring dashboard** to track order statuses
4. **Test with small amounts** to understand the complete flow

