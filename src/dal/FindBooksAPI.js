const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=";
const MAX_RESULT = 30;

const typeQuery = {
  paramsQuery: "q",
  startIndex: "startIndex",
  paramCategory: "subject",
  paramSort: "orderBy",
  maxResults: "maxResults",
};

export default class FindBooksAPI {
  #url = new URL(BASE_URL);
  constructor(
    searchParams,
    startIndex,
    searchCategory = null,
    searchFiltered = null
  ) {
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
    this.#url.searchParams.set(typeQuery.startIndex, startIndex);
    this.#url.searchParams.set(typeQuery.maxResults, MAX_RESULT);
  }
  get url() {
    return this.#url;
  }
  _getSearchParams(query) {
    if (query.length === 1) {
      throw new Error("there should be more characters");
    }
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
    const findBooks = {
      totalBooks: 0,
      infoBooks: [],
    };
    try {
      let { items, totalItems } = await this._getFindBooksJSON();
      findBooks.totalBooks = totalItems;
      findBooks.infoBooks = items.map((item) => {
        return {
          id: item.id,
          authors: item.volumeInfo.authors ?? ["unknown"],
          categories: item.volumeInfo.categories ?? ["unknown"],
          description: item.volumeInfo.description ?? "no description",
          imageLinks:
            item.volumeInfo.imageLinks ?? "https://via.placeholder.com/128x187",
          language: item.volumeInfo.language ?? "unknown",
          publishedDate: item.volumeInfo.publishedDate ?? "no date",
          publisher: item.volumeInfo.publisher ?? "no publisher",
          subtitle: item.volumeInfo.subtitle ?? "unknown",
          title: item.volumeInfo.title ?? "no title",
        };
      });

      return findBooks;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
