const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const typeQuery = {
  paramsQuery: "q",
  paramCategory: "subject",
  paramSort: "orderBy",
};

export default class FindBooksAPI {
  #url = new URL(BASE_URL);
  constructor(searchParams, searchCategory = null, searchFiltered = null) {
    this.#url.searchParams.set(
      typeQuery.paramsQuery,
      this._getSearchParams(searchParams)
    );
    if (searchCategory) {
      this.#url.searchParams.set(typeQuery.paramCategory, searchCategory);
    }
    if (searchFiltered) {
      this.#url.searchParams.set(typeQuery.paramSort, searchFiltered);
    }
  }
  get url() {
    return this.#url;
  }
  _getSearchParams(query) {
    return query.replace(/ +/g, " ").trim().split(" ").join("+");
  }
  async _getFindBooksJSON() {
    const response = await fetch(this.#url);
    if (!response.ok) {
      let message = `An error has occurred: ${response.status}`;
      throw new Error(message);
    }
    let booksJson = await response.json();
    return booksJson;
  }
  async fetchFindBooksAsyncAwait() {
    try {
      const findBooks = {
        totalBooks: 0,
        infoBooks: [],
      };
      let { items, totalItems } = await this._getFindBooksJSON();
      findBooks.totalBooks = totalItems;
      findBooks.infoBooks = items.map((item) => {
        return {
          id: item.id,
          authors: item.volumeInfo.authors,
          categories: item.volumeInfo.categories,
          description: item.volumeInfo.description,
          imageLinks: item.volumeInfo.imageLinks,
          language: item.volumeInfo.language,
          publishedDate: item.volumeInfo.publishedDate,
          publisher: item.volumeInfo.publisher,
          subtitle: item.volumeInfo.subtitle,
          title: item.volumeInfo.title,
        };
      });
      return findBooks;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
