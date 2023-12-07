import axios from "axios";
import { BASE_URL, FILTER_URL } from "../constants/apiUrls";

function generateFilterUrl({ price, pages, author }) {
  const params = {};
  if (price !== '') params.price = price;
  if (pages !== '') params.pages = pages;
  if (author !== '') params.author = author;

  return params;
}

export async function getAllBooksRequest() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFilteredBooks({ price, pages, author }) {
  const params = generateFilterUrl({ price, pages, author });

  try {
    const response = await axios.get(FILTER_URL, { params });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getBookById(bookId) {
    try {
        const response = await axios.get(BASE_URL + `/${bookId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
