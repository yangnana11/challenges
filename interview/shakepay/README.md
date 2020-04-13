If the type is conversion, add value to "to" currency
For example,

{
    "createdAt": "2019-06-10T15:50:22.361Z",
    "amount": 9,
    "currency": "CAD",
    "type": "conversion",
    "direction": null,
    "from": {
        "currency": "CAD",
        "amount": 9
    },
    "to": {
        "currency": "BTC",
        "amount": 0.00084429
    }
}

BTC_balance += 0.00084429


A balance for a currency is calculated by adding all the “credits” and subtracting all the “debits” for that currency.

Net worth = CAD_balance + (BTC_balance * BTC_CAD_rate) + (ETH_balance * ETH_CAD_rate)

with BTC_CAD_rate = 9432.24 and ETH_CAD_rate = 216.12
