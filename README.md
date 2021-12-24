# Сайт барного меню

MVP-версия сайта с меню бара [pushinbar.ru](https://pushinbar.ru), сделанная в барном мастер-классе за полтора часа.

![image](https://user-images.githubusercontent.com/22644149/147296749-3852216d-25b6-4f0f-8d2d-917100ff63b3.png)

- База данных в Google Таблице
- Минимальный Backend на [Google App Script](https://developers.google.com/apps-script)
- Простейший Frontend на ванильных HTML/CSS/JS
- Бесплатный хостинг и CI от [Vercel](https://vercel.com/)


## Данные в Google Таблице

Информация о пиве и его таблицы управляется прямо и Google Таблицы:
https://docs.google.com/spreadsheets/d/1x2GUc8vCtzdQ8SdqTswv3E-NidNZXEXzqsLY6z9JGQA/edit#gid=1562855295

![image](https://user-images.githubusercontent.com/22644149/147297372-c392fd85-fb3e-4d3a-9257-4b4b0c0b3fe6.png)


## Бэкэнд на Google AppScript
`backend-google-app.gs` (код из интерфейса Google AppScript)

Сервер [script.googleusercontent.com](https://script.googleusercontent.com/macros/echo?user_content_key=Qo3nCev3vKhzejCjIcVZhB3ULyuCcBbL96mT4beg5cEbpTrLIM9I2Vz2-MRljh3dZB7UVyrrKwBWI-HvYVs3EWLTaVdQp0jPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCtUk43f48yQC-4h6uPTT3F5OK0fJemEGBaC-lLKqKzy2Q9eHLyJ9qux9rcQPyY6WCG_-W_z8TVH3c_8bZg2_Bdf-wvr4dxwbdz9Jw9Md8uu&lib=MAmgsdUMg_-ZrqH71iCQ13b_P0nMP0Yb0) возвращает данные в формате JSON:
```json
[
  {
    "brewery": "Jaws",
    "availability": false,
    "beer": "Атомная Прачечная IPA",
    "type1": "Ипа",
    "type2": "",
    "volume": "0.5",
    "price": "280",
    "cover": "https://untappd.akamaized.net/site/beer_logos_hd/beer-631746_0b8c5_hd.jpeg"
  },
  ...
]
```

## TODO
* [x] Вывести меню бара
* [x] Шапка и подвал сайта
* [ ] Добавить типы пива
* [ ] Десктопная версия
* [ ] Вывести список категорий
* [ ] Увеличить скорость загрузки меню — кэшировать ответы Google Apps
* [ ] Убрать скачки при загрузке (Layout Shift)

## Как это работает?

Если вы новичок, то вам пригодится наш [Github Gist](https://gist.github.com/a-chabin/b645837dc19c546035d2da42027c4196) о создании MVP — о бэкэнде и файлах HTML/CSS/JS 


## Авторы
- [Александр Чабин](https://twitter.com/nibach) — разработчик
- [Егор Макаров](https://www.instagram.com/mak_egor/) — [дизайн](https://www.figma.com/file/KFNSATeJHFbKiEiUAQAGC2/%D0%9C%D0%B5%D0%BD%D1%8E-%D0%B4%D0%BB%D1%8F-%D0%B1%D0%B0%D1%80%D0%B0?node-id=27%3A10220)
- [Андрей Пушин](https://www.instagram.com/pushinandrej/) — ревью дизайна
