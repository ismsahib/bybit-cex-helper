import ccxt from 'ccxt';
import { config } from './config.js';
import { parseFile, sleep, randomValueFromInterval } from './utils/utils.js';

const send = async () => {
  if (config.API_KEY || config.SECRET_KEY || config.network || config.token || config.delay) {
    console.log('The config.js file is filled in incorrectly.');
  }

  const addresses = parseFile('wallets.txt');

  const bybit = new ccxt.bybit({
    apiKey: config.API_KEY,
    secret: config.SECRET_KEY,
  });

  for (const address of addresses) {
    try {
      const amount = randomValueFromInterval(config.minAmount, config.maxAmount);
      await sleep(config.delay);
      await bybit.withdraw(config.token, amount, address, { network: config.network });
      console.log(`${address}: received ${amount}`);
    } catch (error) {
      console.log(error.message);
      console.log(`${address}: error`);
    }
  }
};

send();
