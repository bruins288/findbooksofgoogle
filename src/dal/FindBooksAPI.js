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

      for (let i = 0; i < findBooks.infoBooks.length; i++) {
        for (let j = 1; j < findBooks.infoBooks.length - 1; j++) {
          if (findBooks.infoBooks[i].id === findBooks.infoBooks[j].id) {
            findBooks.infoBooks.splice(i, 1);
            findBooks.totalBooks--;
          }
        }
      }

      return findBooks;
    } catch (error) {
      console.log(error.message);
      return false;
    }
  }
}
