# Order Status
Status for the purchase order (invoice). On the merchant side, the most commonly used statuses are "NEW" and "PAID".
 If it is PAID, you might want to fulfill the customer’s purchase. Every time a status change, Payment Callback will be triggered.
 
--------

## Status

<table>
	<thead>
		<tr>
			<th>Status Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>NEW</td>
			<td>Newly created. Payment currency has not been selected.</td>
		</tr>
		<tr>
			<td>PENDING</td>
			<td>The transaction has been detected, and waiting for the blockchain to confirm. Depending on different coins, the time varies; on a stabl network, Bitcoin 10 minutes, ETH 1 minute, and EOS 3 seconds.</td>
		</tr>
		<tr>
			<td>PAID</td>
			<td>Payment is confirmed and has been credited to the merchant. Purchased goods/services are good to go.</td>
		</tr>
		<tr>
			<td>UNRESOLVED</td>
			<td>The transaction has been confirmed but the payment diverged from what was expected. It might be Overpaid, Underpaid or Delayed.</td>
		</tr>
		<tr>
			<td>RESOLVED</td>
			<td>The merchant has marked the payment as resolved.</td>
		</tr>
		<tr>
			<td>EXPIRED</td>
			<td>Customer does not pay within the time, for example 5 minutes. The order cannot be paid, and merchants should create a new order.</td>
		</tr>
		<tr>
			<td>CANCELED</td>
			<td>Buyer canceled the invoice. The order cannot be paid, and merchants should create a new order.</td>
		</tr>
		<tr>
			<td>REFUND_PENDING</td>
			<td>The customer make a refund request, and refund will be made after confirmation.</td>
		</tr>
		<tr>
			<td>REFUNDED</td>
			<td>Payment was refunded.</td>
		</tr>
	</tbody>
</table>


## Statuses sequence:

1. NEW
2. PENDING
3. <br>
   a) CANCELED or EXPIRED [Final Status] <br>
   b) UNRESOLVED<br>
		  Unresolved might be converted to RESSOLVED [Final Status]<br>
   c) PAID [Final Status]<br>
			Paid might be converted to REFUNDED [Final Status]
	
