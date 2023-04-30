// Функция для обработки данных, полученных из API coinmarketcap.com
function handleData(data) {
  const toncoinPrice = data.data.quotes.USD.price;
  document.getElementById('price').textContent = `$${toncoinPrice.toFixed(2)}`;
}

// Функция для загрузки данных из API coinmarketcap.com и обновления цены TONcoin
function updatePrice() {
  const script = document.createElement('script');
  script.src = 'https://coinmarketcap.com/currencies/toncoin/';
  document.head.appendChild(script);
}

// Добавляем обработчик события для кнопки "Узнать цену TONcoin"
const updateButton = document.getElementById('update-price');
updateButton.addEventListener('click', updatePrice);
