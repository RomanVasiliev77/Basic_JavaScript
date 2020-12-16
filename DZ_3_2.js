const basket = [
    {
        id: 1,
        name: 'пиво',
        price: 1000,
        amount: 2
    },
    {
        id: 2,
        name: 'водка',
        price: 1500,
        amount: 2
    }
]

function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
      totalPrice = totalPrice + basket[i].price * basket[i].amount;
    }
    return totalPrice;
  }
console.log(countBasketPrice(basket));