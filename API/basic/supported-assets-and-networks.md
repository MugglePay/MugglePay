# Supported Assets & Networks

**Last updated**: 2026-11-17

This page lists the assets and networks you can pass as `pay_currency` when you [Create Order](../order/CreateOrder.md) or [Checkout Order](../order/CheckoutOrder.md), and the status of each one. If you do not set `pay_currency`, your customer chooses from the options shown on the payment page.

Status values used on this page:

* **Supported**: available for new orders.
* **Deprecated**: new orders stop on the effective date shown. Do not start new integrations on it.
* **Discontinued**: new orders are rejected with `PAYMENT_OFFLINE`.

All dates on this page are in UTC.

## Supported

| Asset | Network   | `pay_currency`   | Last confirmed payment  |
| ----- | --------- | ---------------- | ----------------------- |
| USDC  | Base      | `USDC_BASE`      | 2026-11-13              |
| USDC  | Ethereum  | `USDC_ERC20`     | None in the last 90 days |
| USDT  | Ethereum  | `USDT_ERC20`     | None in the last 90 days |
| USDC  | Arbitrum  | `USDC_ARB`       | None in the last 90 days |
| USDT  | Arbitrum  | `USDT_ARB`       | 2026-09-12              |
| USDC  | BNB Chain | `USDC_BNB`       | None in the last 90 days |
| USDT  | BNB Chain | `USDT_BNB`       | 2026-10-26              |
| USDC  | Polygon   | `USDC_POL`       | None in the last 90 days |
| USDT  | Polygon   | `USDT_POL`       | None in the last 90 days |
| USDC  | Solana    | `USDC_SOL`       | None in the last 90 days |
| USDT  | Solana    | `USDT_SOL`       | None in the last 90 days |
| USDC  | Stellar   | `USDC_XLM`       | None in the last 90 days |
| ETH   | Ethereum  | `P2P_ETH`        | 2026-11-14              |
| ETH   | Base      | `ETH_BASE`       | 2026-11-14              |
| ETH   | Arbitrum  | `ETH_ARB`        | 2026-11-14              |
| BNB   | BNB Chain | `P2P_BNB`        | 2026-11-14              |
| SOL   | Solana    | `SOL`            | 2026-11-14              |
| USDT  | TRON      | `P2P_USDT_TRC20` | 2026-11-14              |
| USDT  | TON       | `USDT_TON`       | 2026-11-14              |

Last confirmed payment: the most recent date (UTC) on which a payment with this code completed end to end, including small test payments made by MugglePay. "None in the last 90 days" means no completed payment in that period; the option is still available for new orders.

For ETH, BNB and SOL, the invoice shows the exact coin amount to pay, quoted when the invoice is created. Pay that amount before the invoice expires. For USDT on TRON and USDT on TON, each order has its own payment address: always copy the address from the invoice, never from your wallet history.

Pay the exact amount shown on the invoice, on the network shown on the invoice. A payment sent on a different network, in a different token, or for a different amount may not be credited automatically. If that happens, contact <support@mugglepay.com> with the invoice ID and the transaction hash.

### Older codes

These older codes are still accepted and are handled on the same network and token as the code shown. Please switch new integrations to the code shown.

| Older code       | Asset | Network  | Use instead  |
| ---------------- | ----- | -------- | ------------ |
| `USDC`           | USDC  | Ethereum | `USDC_ERC20` |
| `P2P_USDT_ERC20` | USDT  | Ethereum | `USDT_ERC20` |
| `USDT_ARBI`      | USDT  | Arbitrum | `USDT_ARB`   |

### Order amounts and fees

Each payment option accepts orders within its own amount range. The payment page only offers the options that accept your order's amount. If your integration sets `pay_currency` to an option that does not accept the amount, checkout returns `PAYMENT_AMOUNT_OUT_OF_RANGE` ("This amount is outside the range accepted for the selected cryptocurrency. Please pay with another cryptocurrency."). Create the order again without `pay_currency`, or choose another option.

Every order's `price_amount` must be at most 10,000 in the order's `price_currency`. Create Order rejects a larger amount with `PAY_PRICE_ERROR`.

For USDT on TRON and USDT on TON, a processing fee is added to the amount the payer sends. The invoice shows the full amount to pay before the payer sends funds. Your settlement is based on the order's price amount.

### Settlement for ETH, BNB, SOL, USDT on TRON and USDT on TON

For the assets and older codes that moved to the new processing path on 2026-11-14 (see the [Changelog](#changelog)), invoices created from that time are credited to your MugglePay balance in USD (as USDC), at the order's price amount. Orders created before the move, and your existing balances, are not changed.

## Other assets

Native XLM on Stellar is not covered by a support commitment. Do not start new integrations on it. USDC on Stellar (`USDC_XLM`) is not affected and is listed under Supported.

## Deprecated or unsupported

### Stopping on 2026-11-24

These codes stop accepting new orders on 2026-11-24 (UTC). Do not start new integrations on them, and move existing integrations to the alternative shown before that date. Past paid orders stay in your order history, and existing balances are not changed.

| Asset                  | Network     | `pay_currency`               | Stop-new-orders effective date (UTC) | Alternative                       |
| ---------------------- | ----------- | ---------------------------- | ------------------------------------ | --------------------------------- |
| TON (native)           | TON         | `TON`                        | 2026-11-24                           | `USDT_TON`                        |
| NOT                    | TON         | `NOT`                        | 2026-11-24                           | Any option under Supported        |
| BTC (on-chain)         | Bitcoin     | `P2P_BTC` (also sent as `BTC`)  | 2026-11-24                        | None                              |
| BCH                    | Bitcoin Cash | `P2P_BCH` (also sent as `BCH`) | 2026-11-24                        | Any option under Supported        |
| LTC                    | Litecoin    | `P2P_LTC` (also sent as `LTC`)  | 2026-11-24                        | Any option under Supported        |
| PYUSD                  | Solana      | `PYUSD_SOL`                  | 2026-11-24                           | `USDC_SOL` or `USDT_SOL`          |
| USDC.e (bridged USDC)  | Polygon     | `USDCE_POL`                  | 2026-11-24                           | `USDC_POL` or `USDT_POL`          |
| EOS                    | EOS         | `EOS`                        | 2026-11-24                           | Any option under Supported        |
| BUSD                   | BNB Chain   | `P2P_BUSD` (also sent as `BUSD`) | 2026-11-24                       | Any option under Supported        |

Since 2026-11-14, `PYUSD_SOL` and `USDCE_POL` are not shown on the payment page unless a merchant has turned them on explicitly.

### Discontinued on 2026-08-06

These assets no longer accept new orders. A request for one of them returns `PAYMENT_OFFLINE` ("Current payment is offline. Please try other payment methods.").

| Asset                      | Network           | Stop-new-orders effective date (UTC) | Alternative                         | Existing-payment support                    |
| -------------------------- | ----------------- | ------------------------------------ | ----------------------------------- | ------------------------------------------- |
| USDV (`USDV_ARB`)          | Arbitrum          | 2026-08-06                           | `USDT_ARB` or `USDC_ARB`            | Past paid orders stay in your order history |
| USDT (`USDT_CELO`)         | Celo              | 2026-08-06                           | `USDC_BASE` or another USDT network | Past paid orders stay in your order history |
| cUSD (`CUSD_CELO`, `CUSD`) | Celo              | 2026-08-06                           | `USDC_BASE`                         | Past paid orders stay in your order history |
| ICP (`ICP`)                | Internet Computer | 2026-08-06                           | `USDC_BASE`                         | Past paid orders stay in your order history |
| ckBTC (`CKBTC`)            | Internet Computer | 2026-08-06                           | `USDC_BASE`                         | Past paid orders stay in your order history |
| ckETH (`CKETH`)            | Internet Computer | 2026-08-06                           | `USDC_BASE`                         | Past paid orders stay in your order history |
| ckUSDC (`CKUSDC`)          | Internet Computer | 2026-08-06                           | `USDC_BASE`                         | Past paid orders stay in your order history |
| XAUT (`XAUT`)              | Ethereum          | 2026-08-06                           | `USDC_ERC20`                        | Past paid orders stay in your order history |
| EURT (`EURT`)              | Ethereum          | 2026-08-06                           | `USDC_ERC20`                        | Past paid orders stay in your order history |
| USDQ (`USDQ`)              | Ethereum          | 2026-08-06                           | `USDC_ERC20`                        | Past paid orders stay in your order history |
| USDR (`USDR`)              | Ethereum          | 2026-08-06                           | `USDC_ERC20`                        | Past paid orders stay in your order history |

If a customer has sent funds for one of the assets in this section, contact <support@mugglepay.com> with the invoice ID and the transaction hash.

## Changelog

| Announcement date (UTC) | Effective date (UTC) | Scope |
| --- | --- | --- |
| 2026-11-17 | 2026-11-24 | Stopping new orders for `TON`, `NOT`, `P2P_BTC`, `P2P_BCH`, `P2P_LTC`, `PYUSD_SOL`, `USDCE_POL`, `EOS` and `P2P_BUSD`. Alternatives: `USDT_TON` for native TON; `USDC_POL` or `USDT_POL` on Polygon; `USDC_SOL` or `USDT_SOL` for Solana stablecoins; no alternative for BTC. Past orders and existing balances are unchanged. |
| 2026-11-17 | 2026-11-17 | Published this page. No change to which assets accept new orders. |
| 2026-11-17 (first announced on this page) | 2026-11-14 | ETH on Ethereum, Base and Arbitrum, BNB, SOL, USDT on TRON and USDT on TON moved to a new processing path, together with the older codes `USDC`, `P2P_USDT_ERC20` and `USDT_ARBI`. Invoices created from 2026-11-14 are credited to your balance in USD (as USDC) at the order's price amount. Earlier orders and existing balances are unchanged. |
| Not announced at the time; first recorded on this page on 2026-11-17 | 2026-08-06 | Stopped new orders for `USDV_ARB`, `USDT_CELO`, `CUSD_CELO`, `CUSD`, `ICP`, `CKBTC`, `CKETH`, `CKUSDC`, `XAUT`, `EURT`, `USDQ`, `USDR`. |

## Questions

Email <support@mugglepay.com>.
