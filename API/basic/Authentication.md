# Authentication

If you want to call the api (CreateOrder) on your website or apps, authentication

* API Server Side Authentication

## API Server Side Authentication

Keep the API key private!

Server-side calls to this API must be done from a secured and trusted environment (e.g. via your backend server, not directly from frontend web).

```
HTTP header: 
  token: tokenname
```

Get Token from backend portal.

![](https://dcdn.mugglepay.com/docs/pics/get-api-en.png)

## API Authentication

## Requests

### POST Request

In every POST method set Content-Type: application/json header.

### Request Body/Query

Required fields are marked as required or (\*).

### Free Plan Limits

1. **createOrder 500 requests per hour per userid**

The limit is for createOrder (POST API) for the merchant.

If you reach the limit, you should wait for the timer resets in an hour.

2. **10,000 requests per hour per IP address**

This applies to all APIs no matter it requires authentication or not.

It contains the GetOrder, CreateOrder, Checkout API.

3. If you want to increase the limits, please create a ticket in Help center, or chat with us in the customer service window.
