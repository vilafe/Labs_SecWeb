# Лабораторная работа №3

## Задание 1

В папке lab3 находится nodejs уязвимое приложение. Необходимо развернуть его, найти источники XSS и исправить. Модифицированное приложение загрузить в свой репозиторий GitHub.

Для выполнения лабораторной потребуется проделать следующие шаги (если вы их проделали для лабораторной 2, то повторять не нужно):

1. Установить PostgreSQL сервер любой версии.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/3.jpg" />
</p>

2. Создать БД lib.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/4.jpg" />
</p>

3. Применить к ней скрипты из папки db (либо создать объекты и вставить данные в таблицы руками). Скрипты выполнять в порядке указанном в имени файла. Восстановить данные из файла data.sql

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/5.jpg" />
</p>

4. Установить nodejs версии 14.

5. Перейти в папку lab3 и выполнить в ней команду npm install.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/1.jpg" />
</p>


6. Запустить сайт через Visual Studio Code или через команду npm start.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/2.jpg" />
</p>


7. Войти на сайт и увидеть список книг и авторов.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/6.jpg" />
</p>

8. На странице со списком книг найти:

8.1. Reflected XSS в поиске книг

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/7.jpg" />
</p>

8.2. Persisted (Stored) XSS при создании книги и отображении списка книг

При добавлении книги вставим пейлоад <script>alert('XSS')<script>.
Пейлоад добавился на страницу.

<p align="center">
  <img src="https://github.com/gk-j2/DevSecWeb/blob/main/ex03/pictures/8.2.png" />
</p>

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/8.jpg" />
</p>
9. Написать отчёт с описанием найденных уязвимости и примерами их эксплуатации

10. Исправить уязвимость. В отчёте привести пример того, что уязвимости больше не эксплуатируются.
Для того, чтобы исправить уязвимости необходимо:
1. Запретить метасимволы, например '<' или '>'.

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/9.jpg" />
</p>

1. Реализовать более сильную генерацию куки, установить HttpOnly флаг. (Для большей надежности можно установить Secure, но в данном случае не применимо.)

<p align="center">
  <img src="https://github.com/vilafe/Labs_SecWeb/blob/main/lab03/fotos/10.jpg" />
</p>
