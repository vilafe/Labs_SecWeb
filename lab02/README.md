# Лабораторная работа №2

Цель работы: Поиск и устранение SQL Injection.

## Задание 1

В папке lab2 находится nodejs уязвимое приложение. Необходимо развернуть его, найти SQL инъекцию и исправить. Модифицированное приложение загрузить в свой репозиторий GitHub.

Для выполнения лабораторной потребуется проделать следующие шаги:

1. Установить PostgreSQL сервер любой версии.
 
<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/1.jpg" />
</p>

2. Создать БД lib.

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/2.jpg" />
</p>

 
3. Применить к ней скрипты из папки db (либо создать объекты и вставить данные в таблицы руками). Скрипты выполнять в порядке указанном в имени файла. 
3.1. Восстановить данные из файла data.sql.

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/3.jpg" />
</p>

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/4.jpg" />
</p>

4. Установить nodejs версии 14.

5. Перейти в папку lab2 и выполнить в ней команду:

```bash
npm install
```
<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/5.jpg" />
</p>

6. Запустить сайт через Visual Studio Code или через команду:

```bash
npm start
```

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/6.jpg" />
</p>

7. Войти на сайт и увидеть список книг и авторов.
 
<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/8.jpg" />
</p>
    
8. Обнаружить sql инъекцию.

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/9.jpg" />
</p>

9. Написать отчёт с описанием найденной уязвимости и примерами её эксплуатации. В отчете приветси информацию об: обходе установленного фильтра, получении данных из другой таблицы, похищении пароля пользователя.

9.1. Получим текущую таблицу в обход SQL-запроса приложения. Используем пейлоад:

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/10.jpg" />
</p>

9.2. Получим схему БД для определения таблиц с помощью пейлоада:

```sql
%' union select null, table_schema, table_name from information_schema.tables --
```

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/11.jpg" />
</p>

9.3. Из вывода можно найти информацию от том, что есть таблица public.users. С помощью следующего запроса определим какие столбцы есть в БД и их тип:

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/12.jpg" />
</p>
 
10. Исправить уязвимость. В отчёте привести пример того, что уязвимости больше не эксплуатируются.
 
<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/13.jpg" />
</p>

<p align="center">
  <img src="/home/vila/Labs_SecWeb/lab02/fotos/14.jpg" />
</p>

