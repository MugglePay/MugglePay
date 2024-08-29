# Merchant FAQ

## Should I register with Email or Web3 Wallets?

If you want to accept crypto into your own wallets, we suggest you register with your own Web3. It supports self-custody (self managed) mode. No account registeration. No withdraw needed. Read [more](https://docs.mugglepay.com/self-managed-non-custodian)

If you want a one stop solution for your website, to accept different tokens on different blockchains. E.g. USDT, USDC on different chains like Ethereum, Ton, Solana, Binance, Layer2 like Arbitrum, . We suggest you register with your email with the simple mode.

## Do you have a Testnet or dev environment for integration?

If you want to integrate with MugglePay, we will send you $0.1 worth of USDT to your account. You can create orders as $0.01 USD for your integration. How to get $0.1 USDT as follows

* Register a Web3 account (e.g. with MetaMask ), and have your address ready.
* Register a MugglePay account, and create a Ticket in Help Center.
* Write down your  address and we will send you USDT and Eth tokens on Arbitrum network&#x20;

## What if I forgot my password?

If you’ve lost or forgotten your password, you can contact your account manager who gave you the invitation code.

## How do I withdraw money?

You can withdraw USDT, USDC, BTC, EOS from the MugglePay Dashboard by clicking on the "Withdraw" button. On Tuesdays, we will automatically withdraw money for you. On the first withdrawal, you will need to contact your account manager to confirm the coin address.

## What is the cost of withdrawal?

EOS withdrawals are free. The withdrawal fee for USDT (OMINI) is $3.50.

## How to exchange cryptocurrency for US dollars?

Method 1: You can exchange the cryptocurrency for US dollars on the exchange, such as GDAX, Huobi. Method 2: You can exchange the cryptocurrency for Bitcoin on the exchange, such as Binance. And you can exchange Bitcoin for USD on OTC exchange, such as Coincola.

## I want to pay by digital currency, but what if I don't have cryptocurrency?

You can purchase cryptocurrency on your credit card at Binance. Or buy cryptocurrency at Huobi via Alipay and bank card. After buying the cryptocurrency, you need to withdraw it to your wallet for payment.

## Why I can't get the callback request after a payment finished?

If you can't get the callback request after a payment finished, you should check if you correctly pass the `callback_url` params when you send a create order request. Additionally, ensure that the URL starts with **`https`** instead of **`http`**. You also can check the url at [Merchants Order History Page](https://merchants.mugglepay.com/transactions/orders) by click Triger **Payment Callback** button and make sure that the callback response returns a **200 OK** status with `{ status: 200 }` in the body content. Otherwise, the request will be identified as failed, and the system will retry several times. For more details, refer to the [MugglePay documentation](https://docs.mugglepay.com/order/paymentcallback).
