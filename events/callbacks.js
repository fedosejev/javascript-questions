const stockSymbol = 'FB';
const STOCK_PRICES = {
  FB: 100
};

function getPrice(stockSymbol, callback) {
  setTimeout(() => {
    callback(null, STOCK_PRICES[stockSymbol]);
  }, 250);
}

getPrice(stockSymbol, (error, price) => {
  if (error) {
    console.error('Try again later!');
  }

  console.log(`$${stockSymbol} price is $${price}.`);
});
