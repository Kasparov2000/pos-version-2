export default function formatMoney(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: "USD" }).replace("$", '')
}