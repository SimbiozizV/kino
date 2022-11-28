# kino

Это расширение для Chrome позволяющее накручивать баллы в игре [Кинопоиску 19 лет](https://www.kinopoisk.ru/special/birthday19/)

## Установка

Находясь в корневом каталоге выполнить:
```
yarn install
yarn build
```
Для режима разработки заменить ```yarn build``` на ```yarn start```

## Как этим пользоваться?

После выполнения команд появится папка build. Переходим в расширения хрома и выбираем "загрузить распакованное расширение". Выбираем папку build.

Расширению необходимо указать какой режим игры сейчас будет. Для этого добавляем к адресу страницы query параметр g с режимом текущей игры:
```
https://www.kinopoisk.ru/special/birthday19/?g=kino - Для разгадывания кино
https://www.kinopoisk.ru/special/birthday19/?g=quites - Для разгадывания цитат
https://www.kinopoisk.ru/special/birthday19/?g=descriptions - Для разгадывания описаний
https://www.kinopoisk.ru/special/birthday19/?g=memes - Для разгадывания мемов
```

