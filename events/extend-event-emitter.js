const EventEmitter = require('events').EventEmitter;

const stockSymbol = 'FB';
const STOCK_PRICES = {
  FB: 100
};

const priceSource = Object.assign({}, EventEmitter.prototype, {
  getPrice(stockSymbol) {
    this.emit('data', STOCK_PRICES[stockSymbol]);
  }
});

priceSource.on('data', price => {
  console.log(`$${stockSymbol} price is $${price}.`);
});

priceSource.on('error', () => {
  console.error('Try again later!');
});

priceSource.getPrice(stockSymbol);
