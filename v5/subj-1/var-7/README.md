# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Having the `function applyDiscount(vehicles, discount)`, complete the following tasks:

- Function should return a Promise; (0.5 pts)
- If `discount` is not a number, the function should `reject` an `Error` with the message `Invalid discount`; (0.5 pts)
- `vehicles` is an array that contains objects with the following format: `{make: string, price: number}` (Example: [{make: "Audi A5", price: 15000}]). If an array with invalid objects is passed then the function should `reject` an `Error` with the message `Invalid array format`; (0.5 pts)
- Function should `reject` a `string` with the value `Discount too big` if `discount` is greater than 50% of the min price from `vehicles` array; (0.5 pts)
- Function should `resolve` an array with applied discount to each `vehicle price`; (0.5 pts)