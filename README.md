# Auto-withdrawal assets from Bybit

This code helps to withdraw assets to an unlimited number of wallets from the Bybit exchange.

## CAUTION

1) Make sure you have whitelisted your wallet address here: https://www.bybit.com/user/assets/money-address
2) Assets must be in a SPOT account
3) Create API without reference to IP here: https://www.bybit.com/app/user/api-management

## Install Node.js

https://nodejs.org

## Install dependencies

You can install it using:

```
npm install
```

## Fill in the config.js and wallets.txt
1) The name of the token and network is the same as on the exchange.
2) In wallets.txt 1 wallet = 1 line

## Run code

You can run the following command in terminal

```
npm run start
```
