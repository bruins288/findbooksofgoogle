import { enumUrlParams } from "../utils/data";

const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const MAX_RESULT = 30;

class BooksAPI {
  constructor() {
    this.url = new URL(BASE_URL);
  }

  #checkQueryParams(query) {
    if (query.length === 1) {
      throw new Error("there should be more characters");
    }
    return query.replace(/ +/g, " ").trim().split(" ").join("+");
  }
  #createNewObjectForStore(data) {
    return {
      id: data.id,
      authors: data.volumeInfo.authors ?? ["unknown"],
      categories: data.volumeInfo.categories ?? ["unknown"],
      description: data.volumeInfo.description ?? "no description",
      imageLinks:
        data.volumeInfo.imageLinks ?? "https://via.placeholder.com/128x187",
      language: data.volumeInfo.language ?? "unknown",
      publishedDate: data.volumeInfo.publishedDate ?? "no date",
      publisher: data.volumeInfo.publisher ?? "no publisher",
      subtitle: data.volumeInfo.subtitle ?? "unknown",
      title: data.volumeInfo.title ?? "no title",
    };
  }
  async #getBooksJSON() {
    const response = await fetch(this.url);
    if (!response.ok) {
      let message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const booksJson = await response.json();
    return booksJson;
  }
  async #getBookByIdJSON(id) {
    const response = await fetch(BASE_URL + `/${id}`);
    if (!response.ok) {
      let message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    const booksJson = await response.json();
    return booksJson;
  }

  setSearchUrlParamsAPI(
    query,
    searchCategory = null,
    searchOrderBy = null,
    startIndex = null
  ) {
    try {
      this.url.searchParams.set(
        enumUrlParams.paramQuery,
        this.#checkQueryParams(query)
      );
    } catch (error) {
      console.log(error.message);
    }
    if (searchCategory) {
      this.url.searchParams.set(enumUrlParams.paramCategory, searchCategory);
    }
    if (searchOrderBy) {
      this.url.searchParams.set(enumUrlParams.paramOrderBy, searchOrderBy);
    }
    this.url.searchParams.set(enumUrlParams.startIndex, startIndex ?? 0);
    this.url.searchParams.set(enumUrlParams.maxResults, MAX_RESULT);
  }

  async fetchBooksAsyncAwaitAPI() {
    const books = {
      total: 0,
      info: [],
    };
    try {
      let { items, totalItems } = await this.#getBooksJSON();
      books.total = totalItems ?? 0;
      books.info = items.map((item) => {
        return this.#createNewObjectForStore(item);
      });
      return books;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
  async fetchBookByIdAsyncAwaitAPI(id) {
    try {
      let item = await this.#getBookByIdJSON(id);
      return this.#createNewObjectForStore(item);
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new BooksAPI();
