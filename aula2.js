priceCalculator = (product, price) => {
    let shippingCost = 0;
    let finalPrice = 0;

    if (+price > 1 && +price <= 2000) {
        shippingCost = 300;
    } else if (+price > 2000 && +price <= 4000) {
        shippingCost = 450;
    } else {
        shippingCost = 700
    }

    finalPrice = +price + shippingCost

    return `O produto ${product} custa R$${price}. Seu custo de envio é R$
    ${shippingCost}. Portanto, o preço final é R$${finalPrice}`
}

console.log(priceCalculator('Macbook', 2500))
console.log(priceCalculator('Celular', 500))
console.log(priceCalculator('Playstation', 4500))