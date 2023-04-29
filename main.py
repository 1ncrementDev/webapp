import telebot
from telebot import types

bot = telebot.TeleBot('6273729472:AAFl8MBcej7N8ccfSEM8dlg7bSltfhh67aY')

# Обработчик команды /start
@bot.message_handler(commands=['start'])
def send_welcome(message):
    # Отправляем приветственное сообщение и кнопку
    reply_markup = types.InlineKeyboardMarkup()
    url_button1 = types.InlineKeyboardButton("Онлайн магазин", web_app=types.WebAppInfo('https://chat.openai.com/'))
    reply_markup.add(url_button1)
    bot.reply_to(message, "➣ Добро пожаловать в магазин! \n➢ Нажмите на любую кнопку ниже, чтобы перейти к Веб-Приложению магазина.", reply_markup=reply_markup)


bot.polling()