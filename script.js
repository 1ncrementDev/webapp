function handleData(data) {
  const toncoinPrice = data.data.quotes.USD.price;
  document.getElementById('price').textContent = `$${toncoinPrice.toFixed(2)}`;
}

document.getElementById("btnPrice").addEventListener("click", function() {
  const script = document.createElement('script');
  script.src = 'https://coinmarketcap.com/currencies/toncoin/';
  document.head.appendChild(script);
});

