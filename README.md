# Сайт барного меню

MVP-версия сайта с меню бара [pushinbar.ru](https://pushinbar.ru), сделанная в барном мастер-классе за полтора часа.

![image](https://user-images.githubusercontent.com/22644149/147296749-3852216d-25b6-4f0f-8d2d-917100ff63b3.png)

- База данных в Google Таблице
- Минимальный Backend на Google App Script
- Простейший Frontend на ванильных HTML/CSS/JS
- Бесплатный хостинг и CI от Vercel


## Данные в Google Таблице

Информация о пиве и его таблицы упрвляется прямо и Google Таблицы:
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

## index.html
Верстка страницы
- Логотип
- Контейнер для меню бара
- Подвал

## style.css
Стили для страницы. Для наименования классов используется [БЭМ](https://ru.bem.info/methodology/quick-start/) — один из самых простых и удобных способов организации CSS
```
.block {}
.block__element {}
.block__element--modifier {}
```

## script.js
Код для динамической подгрузки данных от [бэкэнда](https://script.googleusercontent.com/macros/echo?user_content_key=Qo3nCev3vKhzejCjIcVZhB3ULyuCcBbL96mT4beg5cEbpTrLIM9I2Vz2-MRljh3dZB7UVyrrKwBWI-HvYVs3EWLTaVdQp0jPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCtUk43f48yQC-4h6uPTT3F5OK0fJemEGBaC-lLKqKzy2Q9eHLyJ9qux9rcQPyY6WCG_-W_z8TVH3c_8bZg2_Bdf-wvr4dxwbdz9Jw9Md8uu&lib=MAmgsdUMg_-ZrqH71iCQ13b_P0nMP0Yb0) 

- Синтаксис [async/await](https://learn.javascript.ru/async-await) в самовызываемой функции
- [fetch и .json()](https://learn.javascript.ru/fetch) для извлечения данных
- Перебирающий [метод массива map](https://learn.javascript.ru/array-methods#map)
- Поиск элемента по id и встраивание HTML через [element.innerHTML](https://developer.mozilla.org/ru/docs/Web/API/Element/innerHTML) и [шаблонную строку](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Template_literals)


## Хостинг

- Бесплатный хостинг от [Vercel](https://vercel.com/) с инеграцией для Github (push — и ветка сразу выкладывается)
- Домен за 145 рублей в год от [Atex.ru](https://atex.ru). Искать регистраторов подешевле [удобно здесь](http://forum.ru-board.com/topic.cgi?forum=11&topic=3121&start=1360)


## TODO
- [x] Вывести меню
- [x] Шапка и подвал сайта
- [ ] Добавить типы пива
- [ ] Десктопная версия
- [ ] Вывести список категорий
- [ ] Увеличить скорость загрузки / убрать Layout Shift — скачки при загрузке
