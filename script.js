function convert() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    
    const conversionRate = {
        USD: { EUR: 0.85, GBP: 0.73 },
        EUR: { USD: 1.18, GBP: 0.86 },
        GBP: { USD: 1.38, EUR: 1.16 }
    };

    const convertedAmount = amount * conversionRate[fromCurrency][toCurrency];
    document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}