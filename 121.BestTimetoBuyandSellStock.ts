function maxProfit(prices: number[]): number {
    const length = prices.length;
    let minPrice = Infinity; // set max value for any price can be lower than this
    let maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price); 
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return  maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5