const EventEmitter = require('events');

const stockSymbol = 'FB';
const STOCK_PRICES = {
  FB: 100
};

function getPrice(stockSymbol) {
  const eventEmitter = new EventEmitter();

  process.nextTick(() => {
    eventEmitter.emit('data', STOCK_PRICES[stockSymbol]);
  });

  return eventEmitter;
}

const results = getPrice(stockSymbol);

results.on('data', price => {
  console.log(`$${stockSymbol} price is $${price}.`);
});

results.on('error', () => {
  console.error('Try again later!');
});
