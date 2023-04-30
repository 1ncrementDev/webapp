import telebot
from telebot import types

bot = telebot.TeleBot('6273729472:AAFl8MBcej7N8ccfSEM8dlg7bSltfhh67aY')

# Обработчик команды /start
@bot.message_handler(commands=['start'])
def send_welcome(message):
    # Отправляем приветственное сообщение и кнопку
    reply_markup = types.InlineKeyboardMarkup()
    url_button1 = types.InlineKeyboardButton("Угадай Число", web_app=types.WebAppInfo('https://1ncrementdev.github.io/webapp/'))
    reply_markup.add(url_button1)
    bot.reply_to(message, '➣ Добро пожаловать в игру "Угадай Число"! \n➢ Нажмите на любую кнопку ниже, чтобы перейти к Веб-Приложению.', reply_markup=reply_markup)


bot.polling()