
export function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',-'
}

export function formatPriceWithCurrency(price) {
    return formatPrice(price) + ' Kč'
}
