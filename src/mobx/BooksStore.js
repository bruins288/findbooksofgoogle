import {
  action,
  configure,
  makeObservable,
  observable,
  runInAction,
} from "mobx";

import BooksAPI from "../dal/BooksAPI";
configure({ enforceActions: "observed" });

export const status = {
  WAIT: "wait",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export default class BooksStore {
  constructor() {
    this.booksList = { total: 0, info: [] };
    this.book = {};
    this.query = "";
    this.searchCategory = null;
    this.searchOrderBy = null;
    this.startIndex = 0;
    this.isMoreLoading = false;
    this.status = status.WAIT;
    makeObservable(this, {
      booksList: observable,
      query: observable,
      searchCategory: observable,
      searchOrderBy: observable,
      startIndex: observable,
      status: observable,
      isMoreLoading: observable,
      setBook: action,
      setBooks: action,
      setUrlSearch: action,
      setStatusWait: action,
      setStatusLoading: action,
      setStatusSuccess: action,
      setStatusError: action,
      incrementStartIndex: action,
      setMoreLoading: action,
      getBookById: action.bound,
    });
  }
  setBooks = (apiData) => {
    this.booksList = apiData;
  };
  setBook = (apiData) => {
    this.book = apiData;
  };
  setUrlSearch(
    query,
    searchCategory = null,
    searchOrderBy = null,
    startIndex = null
  ) {
    this.query = query;
    this.searchCategory = searchCategory;
    this.searchOrderBy = searchOrderBy;
    this.startIndex = startIndex;
  }
  setStatusWait() {
    this.status = status.WAIT;
  }
  setStatusLoading() {
    this.status = status.LOADING;
  }
  setStatusSuccess() {
    this.status = status.SUCCESS;
  }
  setStatusError() {
    this.status = status.ERROR;
  }
  incrementStartIndex() {
    this.startIndex += 1;
  }
  setMoreLoading(isLoading) {
    this.isMoreLoading = isLoading;
  }
  getBookById(id) {
    return this.booksList.info.find((book) => book.id === id);
  }
  getBooksAsyncAwait = async () => {
    BooksAPI.setSearchUrlParamsAPI(
      this.query,
      this.searchCategory,
      this.searchOrderBy,
      this.startIndex
    );
    try {
      this.setStatusLoading();
      const data = await BooksAPI.fetchBooksAsyncAwaitAPI();
      runInAction(() => {
        if (!this.isMoreLoading) {
          this.booksList = data;
        } else {
          this.booksList.info = [...this.booksList.info, ...data.info];
        }
      });
      this.setStatusSuccess();
      this.setMoreLoading(false);
    } catch (error) {
      console.log(error.message);
      this.setStatusError();
    }
  };
  getBookByIdAsyncAwait = async (id) => {
    try {
      this.setStatusLoading();
      const data = await BooksAPI.fetchBookByIdAsyncAwaitAPI(id);
      runInAction(() => {
        this.setBook(data);
      });
      this.setStatusSuccess();
    } catch (error) {
      console.log(error.message);
      this.setStatusError();
    }
  };
}
