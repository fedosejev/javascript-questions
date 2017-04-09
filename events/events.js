const EventEmitter = require('events').EventEmitter;

const stockSymbol = 'FB';
const STOCK_PRICES = {
  FB: 100
};

function getPrice(stockSymbol) {
  const eventEmitter = new EventEmitter();

  setTimeout(() => {
    eventEmitter.emit('data', STOCK_PRICES[stockSymbol]);
  }, 250);

  return eventEmitter;
}

const results = getPrice(stockSymbol);

results.on('data', price => {
  console.log(`$${stockSymbol} price is $${price}.`);
});

results.on('error', () => {
  console.error('Try again later!');
});
