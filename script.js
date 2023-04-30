// Функция для обработки данных, полученных из API coinmarketcap.com
function handleData(data) {
  const toncoinPrice = data.data.quotes.USD.price;
  document.getElementById('price').textContent = `$${toncoinPrice.toFixed(2)}`;
}

// Создание скрипта для загрузки данных из API coinmarketcap.com
const script = document.createElement('script');
script.src = 'https://api.coinmarketcap.com/v2/ticker/3814/?convert=USD&callback=handleData';
document.head.appendChild(script);
