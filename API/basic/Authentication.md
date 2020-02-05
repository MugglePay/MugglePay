# Authentication

If you want to call the api (CreateOrder) on your website or apps, authentication
* API Server Side Authentication

## API Server Side Authentication

<b>Keep the API key private!</b>

Server-side calls to this API must be done from a secured and trusted environment (e.g. via your backend server, not directly from frontend web). 

```
HTTP header: 
  token: tokenname
```

Get Token from backend portal.

<img width="500px" src="https://dcdn.mugglepay.com/docs/pics/get-api-en.png" />


## API Authentication



## Requests
### POST Request
In every POST method set Content-Type: application/json header.

### Request Body/Query
Required fields are marked as required or (*).

### Limits
**500 per hour per userid (contact support to increase)**

If you reach the limit, you should wait for the timer resets in an hour.

**10,000 per hour per IP address**

This applies to all APIs no matter it requires authentication or not.
