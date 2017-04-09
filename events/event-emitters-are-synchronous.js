const EventEmitter = require('events');

const stockSymbol = 'FB';
const STOCK_PRICES = {
  FB: 100
};

class PriceEmitter extends EventEmitter {
  getPrice(stockSymbol) {
    this.emit('data', STOCK_PRICES[stockSymbol]);
  }
}

const priceSource = new PriceEmitter();

priceSource.on('data', price => {
  console.log(`$${stockSymbol} price is $${price}.`);
});

priceSource.on('error', () => {
  console.error('Try again later!');
});

console.log("Before we've got price.");
priceSource.getPrice(stockSymbol);
console.log("After we've got price.");
