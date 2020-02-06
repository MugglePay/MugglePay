# HTTP Response and Error Codes

## API Errors

Most common API errors are as follows, including message, reason and status code.

Response example:

```
{
  "error": "API request limit is exceeded",
  "error_code": "API_LIMIT_EXCEEDED",
  "status": "400"
}
```
<table>
	<thead>
		<tr>
			<th>status</th>
			<th>error_code</th>
			<th>error</th>
		</tr>
	</thead>
	<tbody>
		<tr><td>400</td><td>AUTHENTICATION_FAILED</td><td>Authentication Token is not set or expired.</td></tr>
<tr><td>400</td><td>INVOICE_NOT_EXIST</td><td>Invoice does not exist.</td></tr>
<tr><td>400</td><td>INVOICE_VERIFIED_ALREADY</td><td>It has been verified already.</td></tr>
<tr><td>400</td><td>INVOICE_CANCELED_FAIILED</td><td>Invoice does not exist, or it cannot be canceled.</td></tr>
<tr><td>400</td><td>ORDER_NO_PERMISSION</td><td>Order does not exist or permission denied.</td></tr>
<tr><td>400</td><td>ORDER_CANCELED_FAIILED</td><td>Order does not exist, or it cannot be canceled.</td></tr>
<tr><td>400</td><td>ORDER_REFUND_FAILED</td><td>Order does not exist, or it`s status is not refundable.</td></tr>
<tr><td>400</td><td>ORDER_VERIFIED_ALREADY</td><td>Payment has been verified with payment already.</td></tr>
<tr><td>400</td><td>ORDER_VERIFIED_PRICE_NOT_MATCH</td><td>Payment money does not match the order money, please double check the price.</td></tr>
<tr><td>400</td><td>ORDER_VERIFIED_MERCHANT_NOT_MATCH</td><td>Payment money does not the order of current merchant , please double check the order.</td></tr>
		<tr><td>400</td><td>ORDER_NOT_VALID</td><td>Order id is not valid.</td></tr>
<tr><td>400</td><td>ORDER_PAID_FAILED</td><td>Order not exist or is not paid yet.</td></tr>
<tr><td>400</td><td>ORDER_MERCHANTID_EXIST</td><td>Order with same merchant_order_id exisits.</td></tr>
<tr><td>400</td><td>ORDER_NOT_NEW</td><td>The current order is not new, and payment method cannot be switched.</td></tr>
<tr><td>400</td><td>PAYMENT_NOT_AVAILABLE</td><td>The payment method is not working, please retry later.</td></tr>
<tr><td>400</td><td>MERCHANT_CALLBACK_STATUS_WRONG</td><td>The current payment status not ready to send callback.</td></tr>
<tr><td>400</td><td>PARAMETERS_MISSING</td><td>Missing parameters.</td></tr>
<tr><td>400</td><td>PAY_PRICE_ERROR</td><td>Price amount or currency is not set correctly.</td></tr>
<tr><td>400</td><td>CREDENTIALS_NOT_MATCH</td><td>The email or password does not match.</td></tr>
<tr><td>400</td><td>USER_NOT_EXIST</td><td>The user does not exist or no permission.</td></tr>
<tr><td>400</td><td>USER_FAILED</td><td>The user operatioin failed.</td></tr>
<tr><td>400</td><td>INVITATION_FAILED</td><td>The invitation code is not filled correctly.</td></tr>
<tr><td>400</td><td>ERROR</td><td>Error.</td></tr>
		<tr>
			<td>401</td>
			<td>(Unauthorized)</td>
			<td>API credentials are not valid</td>
		</tr>
		<tr>
			<td>404</td>
			<td>(Not Found)</td>
			<td>Page, action not found</td>
		</tr>
		<tr>
			<td>421</td>
			<td>(Too Many Requests)</td>
			<td>API request limit is exceeded</td>
		</tr>
		<tr>
			<td>500</td>
			<td>(InternalServerError)</td>
			<td>Server error in MugglePay</td>
		</tr>
	</tbody>
</table>
