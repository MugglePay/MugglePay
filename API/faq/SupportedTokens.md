# Supported Tokens & Networks

This document provides a complete list of supported cryptocurrencies and their corresponding `pay_currency` codes for API integration.

## Stablecoins

### USDT (Tether)
**Main Token:** USDT  
**pay_currency Codes:**
- `USDT_TRC20` - Tron Network (TRC20)
- `USDT_ERC20` - Ethereum Network (ERC20)
- `USDT_ARB` - Arbitrum Network (ARB20)
- `USDT_BNB` - BNB Smart Chain (BEP20)
- `USDT_CELO` - Celo Network
- `USDT_TON` - TON Network

### USDC (USD Coin)
**Main Token:** USDC  
**pay_currency Codes:**
- `USDC_ERC20` - Ethereum Network (ERC20)
- `USDC_ARB` - Arbitrum Network (ARB20)
- `USDC_SOL` - Solana Network
- `USDC_BASE` - Base Network
- `USDC_POL` - Polygon Network
- `USDC_XLM` - Stellar Network


### CUSD (Celo Dollar)
**Main Token:** CUSD  
**pay_currency Codes:**
- `CUSD` - Celo Network

### PYUSD (PayPal USD)
**Main Token:** PYUSD  
**pay_currency Codes:**
- `PYUSD` - Solana Network

## Major Cryptocurrencies

### ETH (Ethereum)
**Main Token:** ETH  
**pay_currency Codes:**
- `ETH_ERC20` - Ethereum Network (ERC20)
- `ETH_ARB` - Arbitrum Network (ARB20)
- `ETH_BASE` - Base Network

## Network Information

### Layer 1 Networks
- **Ethereum (ERC20)** - Main Ethereum blockchain
- **Tron (TRC20)** - High-speed, low-fee transactions
- **Solana** - Fast, low-cost blockchain
- **Stellar** - Fast, low-cost cross-border payments

### Layer 2 Networks
- **Arbitrum (ARB20)** - Ethereum L2 scaling solution
- **Base** - Coinbase's Ethereum L2
- **Polygon** - Ethereum scaling and infrastructure

### Specialized Networks
- **Celo** - Mobile-first blockchain
- **TON** - Telegram Open Network

## Usage Examples

### API Integration
When creating an order, specify the desired `pay_currency`:

```json
{
  "price_amount": 100.00,
  "price_currency": "USD",
  "pay_currency": "USDT_TRC20",
  "title": "Product Purchase"
}
```

### Supported Combinations
- **USDT on Tron:** `pay_currency: "USDT_TRC20"`
- **USDC on Arbitrum:** `pay_currency: "USDC_ARB"`
- **ETH on Base:** `pay_currency: "ETH_BASE"`

## Network Status

### Currently Active
- ✅ USDT (Tron, Ethereum, Arbitrum, Celo, TON)
- ✅ USDC (Ethereum, Arbitrum, Solana, Base, Polygon, Stellar)
- ✅ ETH (Ethereum, Arbitrum, Base)

### Coming Soon
- 🔄 Additional networks for existing tokens
- 🔄 New token support
- 🔄 Cross-chain bridge support

## Fees & Confirmation Times

| Network | Typical Fee | Confirmation Time |
|---------|-------------|-------------------|
| Tron (TRC20) | ~1 USDT | 1-5 minutes |
| Ethereum (ERC20) | ~5-20 USD | 1-5 minutes |
| Arbitrum (ARB20) | ~0.1-1 USD | 1-2 minutes |
| BNB Chain (BEP20) | ~0.5-2 USD | 1-3 minutes |
| Solana | ~0.000005 SOL | 1-2 minutes |

## Best Practices

1. **Choose the Right Network:** Consider fees and confirmation times
2. **Test with Small Amounts:** Verify integration before going live
3. **Monitor Network Status:** Check for any maintenance or issues
4. **Handle Multiple Networks:** Support multiple options for user flexibility

## Support

For questions about specific tokens or networks:
- **Technical Support:** [Merchant Portal](https://merchants.mugglepay.com/)
- **Documentation:** [API Overview](Overview.md)
- **Email:** business@mugglepay.com
