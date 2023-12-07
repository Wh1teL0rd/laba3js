const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 8080; // Порт вашого сервера

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'oleg272727',
  database: 'mydbreact',
});

db.connect((err) => {
  if (err) {
    console.error('Помилка підключення до бази даних:', err);
  } else {
    console.log('Підключено до бази даних');
  }
});

// Маршрут для отримання всіх книг
app.get('/books', (req, res) => {
  const query = 'SELECT * FROM books';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Помилка запиту до бази даних:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

// Маршрут для отримання книги за ідентифікатором
app.get('/books/:id', (req, res) => {
  const bookId = req.params.id;

  const query = `SELECT * FROM books WHERE id = ${bookId}`;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Помилка запиту до бази даних:', err);
      res.status(500).send('Internal Server Error');
    } else {
      if (result.length === 0) {
        // Якщо книга з вказаним ідентифікатором не знайдена
        res.status(404).send('Book not found');
      } else {
        res.json(result[0]);
      }
    }
  });
});

// Маршрут для фільтрації книг
app.get('/books/filter', (req, res) => {
  const { price, pages, author } = req.query;

  // Припустимо, що ваша таблиця має відповідні поля priceInUah, countOfPages та author
  const query = `
    SELECT *
    FROM books
    WHERE
      priceInUah <= ${price || '9999999'}
      AND countOfPages <= ${pages || '9999999'}
      AND author LIKE '%${author || ''}%'
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Помилка запиту до бази даних:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
});

// Слухаємо порт
app.listen(port, () => {
  console.log(`Сервер запущено на порту ${port}`);
});
